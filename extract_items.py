import json
import re
from html.parser import HTMLParser

class ItemExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.current_item = None
        self.in_item_card = False
        self.in_item_name = False
        self.in_rarity = False
        self.in_action = False
        self.in_description = False
        self.in_value = False
        self.current_tag = None
        self.div_depth = 0

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        # Detect item card - it's a div with rounded-xl class
        if tag == 'div' and 'class' in attrs_dict:
            classes = attrs_dict['class']
            if 'rounded-xl' in classes and 'text-card-foreground' in classes:
                self.in_item_card = True
                self.current_item = {
                    'name': '',
                    'rarity': '',
                    'value': '',
                    'category': '',
                    'action': '',
                    'description': ''
                }

            # Inside item card, look for specific elements
            if self.in_item_card:
                # Item name - h3 with specific classes
                if tag == 'h3':
                    self.in_item_name = True

                # Rarity badge - div with EPIC/RARE/etc
                if 'absolute top-1 right-1' in classes:
                    self.in_rarity = True

                # Action badge - KEEP/SELL/RECYCLE
                if 'text-[10px] px-2 py-1 rounded border' in classes and 'font-bold mb-2 text-center' in classes:
                    self.in_action = True

                # Description - quest/workshop info
                if 'text-[10px] text-center mb-2' in classes and 'bg-slate-950/50' in classes:
                    self.in_description = True

                # Value - the CR amount
                if 'text-xs text-slate-400 flex items-center justify-center' in classes:
                    self.in_value = True

        if tag == 'span':
            self.current_tag = 'span'

    def handle_data(self, data):
        data = data.strip()
        if not data:
            return

        if self.in_item_name:
            self.current_item['name'] = data
            self.in_item_name = False

        elif self.in_rarity:
            if data in ['EPIC', 'RARE', 'UNCOMMON', 'COMMON', 'LEGENDARY']:
                self.current_item['rarity'] = data.lower()
                self.in_rarity = False

        elif self.in_action:
            # Extract action type from badge text
            if 'KEEP' in data:
                if 'Quest' in data:
                    self.current_item['action'] = 'keep'
                    self.current_item['category'] = 'quests'
                elif 'Project' in data or 'Workshop' in data:
                    self.current_item['action'] = 'keep'
                    self.current_item['category'] = 'workshop'
                else:
                    self.current_item['action'] = 'keep'
            elif 'RECYCLE' in data:
                self.current_item['action'] = 'recycle'
                self.current_item['category'] = 'recyclable'
            elif 'SELL' in data:
                self.current_item['action'] = 'sell'
            self.in_action = False

        elif self.in_description:
            if self.current_item['description']:
                self.current_item['description'] += ' ' + data
            else:
                self.current_item['description'] = data

        elif self.in_value and self.current_tag == 'span':
            # Look for numeric value
            if data.replace(',', '').isdigit():
                self.current_item['value'] = data
                self.in_value = False

    def handle_endtag(self, tag):
        if tag == 'div' and self.in_item_card:
            # Check if this is the end of the item card
            if self.current_item and self.current_item['name']:
                # Clean up and categorize
                if not self.current_item['category']:
                    desc = self.current_item['description'].lower()
                    if 'quest' in desc:
                        self.current_item['category'] = 'quests'
                    elif 'workshop' in desc or 'craft' in desc:
                        self.current_item['category'] = 'workshop'
                    elif 'arc part' in desc or 'leaper' in self.current_item['name'].lower() or 'rocketeer' in self.current_item['name'].lower() or 'surveyor' in self.current_item['name'].lower():
                        self.current_item['category'] = 'arc_parts'
                    elif self.current_item['action'] == 'recycle':
                        self.current_item['category'] = 'recyclable'
                    else:
                        self.current_item['category'] = 'materials'

                # Add CR suffix to value
                if self.current_item['value']:
                    self.current_item['value'] = f"{self.current_item['value']} CR"

                self.items.append(self.current_item.copy())
                self.in_item_card = False

        if tag == 'span':
            self.current_tag = None

        if tag == 'div' and self.in_description:
            self.in_description = False

# Read the HTML file
print("Reading HTML file...")
with open(r'C:\Users\ZhuanZ\arcraiderscheatsheet\arcraiderscheatsheet\ref\ARC Raiders Cheat Sheet - Recycling & Loot Guide.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

print("Parsing HTML content...")
parser = ItemExtractor()
parser.feed(html_content)

print(f"Extracted {len(parser.items)} items")

# Output to JSON
output = {'items': parser.items}
output_path = r'C:\Users\ZhuanZ\arcraiderscheatsheet\arcraiderscheatsheet\extracted_items.json'

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Saved to {output_path}")
print(f"\nFirst 3 items:")
for item in parser.items[:3]:
    print(json.dumps(item, indent=2))
