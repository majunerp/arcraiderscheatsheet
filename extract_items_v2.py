import json
import re

# Read the HTML file
print("Reading HTML file...")
with open(r'C:\Users\ZhuanZ\arcraiderscheatsheet\arcraiderscheatsheet\ref\ARC Raiders Cheat Sheet - Recycling & Loot Guide.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

print("Extracting items using regex...")

# Pattern to find all item cards - they are in divs with rounded-xl class
# Each card contains: name (h3), rarity badge, action badge, description, and value

items = []

# Find all item card divs
# Looking for patterns like: <h3 class="...">Item Name</h3>
item_name_pattern = r'<h3 class="[^"]*text-sm font-bold[^"]*">([^<]+)</h3>'
item_names = re.findall(item_name_pattern, html_content)

print(f"Found {len(item_names)} item names")

# Now let's split the HTML by item cards and process each one
# Look for the card pattern
card_pattern = r'<div class="rounded-xl text-card-foreground[^>]*>(.*?)</div></div></div>'

# Better approach: Find each item card block
# Pattern: starts with <div class="rounded-xl... and ends with closing divs
# Each card has: border-color style, h3 name, rarity badge, action badge, description, value

# Split content into potential item cards
card_blocks = re.split(r'<div class="rounded-xl text-card-foreground', html_content)

print(f"Found {len(card_blocks)} potential card blocks")

for i, block in enumerate(card_blocks[1:], 1):  # Skip first split (header)
    try:
        item = {}

        # Extract item name from h3
        name_match = re.search(r'<h3 class="[^"]*">([^<]+)</h3>', block)
        if name_match:
            item['name'] = name_match.group(1).strip()
        else:
            continue  # Skip if no name found

        # Extract rarity (EPIC, RARE, UNCOMMON, COMMON)
        rarity_match = re.search(r'<div class="[^"]*absolute top-1 right-1[^"]*"[^>]*>(EPIC|RARE|UNCOMMON|COMMON|LEGENDARY)</div>', block)
        if rarity_match:
            item['rarity'] = rarity_match.group(1).lower()
        else:
            item['rarity'] = 'unknown'

        # Extract action (KEEP/SELL/RECYCLE)
        action_match = re.search(r'<div class="[^"]*text-\[10px\][^"]*font-bold mb-2 text-center[^"]*">(.*?)</div>', block)
        if action_match:
            action_text = action_match.group(1)
            if 'KEEP' in action_text:
                item['action'] = 'keep'
                if 'Quest' in action_text:
                    item['category'] = 'quests'
                elif 'Project' in action_text:
                    item['category'] = 'workshop'
                else:
                    item['category'] = 'keep'
            elif 'RECYCLE' in action_text:
                item['action'] = 'recycle'
                item['category'] = 'recyclable'
            elif 'SELL' in action_text:
                item['action'] = 'sell'
                item['category'] = 'sellable'
            else:
                item['action'] = 'unknown'
                item['category'] = 'unknown'
        else:
            item['action'] = 'unknown'
            item['category'] = 'unknown'

        # Extract description (quest/workshop info)
        # Look for the text after emoji markers like 📜 or 🏗️ or 🔧
        desc_match = re.search(r'<div class="[^"]*text-\[10px\] text-center mb-2[^"]*">([^<]*(?:<[^>]+>[^<]*)*?)</div>', block)
        if desc_match:
            desc_html = desc_match.group(1)
            # Remove HTML tags but keep text
            desc_text = re.sub(r'<[^>]+>', '', desc_html)
            # Clean up HTML entities
            desc_text = desc_text.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
            item['description'] = desc_text.strip()
        else:
            item['description'] = ''

        # Extract value (CR amount)
        value_match = re.search(r'<span class="[^"]*font-bold text-yellow-300[^"]*">([0-9,]+)</span>', block)
        if value_match:
            item['value'] = f"{value_match.group(1)} CR"
        else:
            item['value'] = ''

        # Refine category based on name patterns if not already set
        if item['category'] == 'unknown':
            name_lower = item['name'].lower()
            if any(word in name_lower for word in ['leaper', 'rocketeer', 'surveyor', 'pulse unit', 'driver', 'vault']):
                item['category'] = 'arc_parts'
            elif any(word in item['description'].lower() for word in ['quest', 'into the fray', 'out of the shadows']):
                item['category'] = 'quests'
            elif any(word in item['description'].lower() for word in ['workshop', 'craft', 'station']):
                item['category'] = 'workshop'
            else:
                item['category'] = 'materials'

        items.append(item)

    except Exception as e:
        print(f"Error processing block {i}: {e}")
        continue

print(f"\nSuccessfully extracted {len(items)} items")

# Output to JSON
output = {'items': items}
output_path = r'C:\Users\ZhuanZ\arcraiderscheatsheet\arcraiderscheatsheet\extracted_items.json'

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Saved to {output_path}")
print(f"\nFirst 5 items:")
for item in items[:5]:
    print(json.dumps(item, indent=2, ensure_ascii=False))

print(f"\n\nRarity distribution:")
rarity_counts = {}
for item in items:
    rarity = item['rarity']
    rarity_counts[rarity] = rarity_counts.get(rarity, 0) + 1
print(json.dumps(rarity_counts, indent=2))

print(f"\n\nCategory distribution:")
category_counts = {}
for item in items:
    category = item['category']
    category_counts[category] = category_counts.get(category, 0) + 1
print(json.dumps(category_counts, indent=2))
