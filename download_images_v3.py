import os
import urllib.request
import urllib.error
import json
from urllib.parse import quote

# Create items directory
items_dir = 'public/items'
os.makedirs(items_dir, exist_ok=True)

# All item IDs from your project
item_ids = [
    'leaper_pulse_unit', 'rocketeer_driver', 'surveyor_vault', 'hornet_driver',
    'wasp_driver', 'snitch_scanner', 'spotter_relay', 'arc_alloy',
    'advanced_electrical_components', 'exodus_modules', 'magnetic_accelerator',
    'sensors', 'battery', 'electrical_components', 'wires', 'durable_cloth',
    'steel_spring', 'rubber_parts', 'metal_parts', 'fabric', 'plastic_parts',
    'antiseptic', 'syringe', 'water_pump', 'humidifier', 'cooling_fan',
    'light_bulb', 'power_rod', 'broken_flashlight', 'broken_handheld_radio',
    'damaged_arc_powercell', 'burned_arc_circuitry', 'ruined_accordion',
    'alarm_clock', 'bicycle_pump', 'broken_taser', 'camera_lens',
    'candle_holder', 'deflated_football', 'diving_goggles', 'expired_respirator',
    'frying_pan', 'garlic_press', 'headphones', 'ice_cream_scooper',
    'portable_tv', 'power_bank', 'projector', 'remote_control', 'ruined_baton',
    'ruined_parachute', 'rusted_bolts', 'tattered_clothes', 'thermostat',
    'torn_blanket', 'toaster', 'lemon', 'apricot', 'dog_collar'
]

# Possible base URLs and patterns for raidercheatsheet.fun
possible_patterns = [
    'https://raidercheatsheet.fun/items/{}.png',
    'https://raidercheatsheet.fun/items/{}.webp',
    'https://raidercheatsheet.fun/images/items/{}.png',
    'https://raidercheatsheet.fun/images/items/{}.webp',
    'https://raidercheatsheet.fun/assets/items/{}.png',
    'https://raidercheatsheet.fun/_next/static/media/{}.png',
    'https://raw.githubusercontent.com/raidercheatsheet/data/main/items/{}.png',
    'https://cdn.raidercheatsheet.fun/items/{}.png',
]

def download_image(url, filepath):
    """Download image from URL to filepath"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status == 200:
                with open(filepath, 'wb') as f:
                    f.write(response.read())
                return True
    except Exception as e:
        pass
    return False

def try_download_item(item_id):
    """Try to download an item from multiple sources"""
    filepath = os.path.join(items_dir, f'{item_id}.png')

    # Skip if already exists
    if os.path.exists(filepath):
        print(f'[SKIP] {item_id}.png (already exists)')
        return True

    # Try each pattern
    for pattern in possible_patterns:
        url = pattern.format(item_id)
        if download_image(url, filepath):
            print(f'[OK] Downloaded: {item_id}.png from {pattern.split("/")[2]}')
            return True

    return False

print('Starting image download...\n')
print(f'Trying {len(possible_patterns)} different URL patterns for each item\n')

success_count = 0
fail_count = 0
failed_items = []

for item_id in item_ids:
    if try_download_item(item_id):
        success_count += 1
    else:
        print(f'[FAIL] {item_id}')
        failed_items.append(item_id)
        fail_count += 1

print(f'\n--- Download Summary ---')
print(f'Success: {success_count}/{len(item_ids)}')
print(f'Failed: {fail_count}/{len(item_ids)}')

if failed_items:
    print(f'\nFailed items:')
    for item in failed_items:
        print(f'  - {item}')

    # Save failed items to file
    with open('failed_items.json', 'w') as f:
        json.dump(failed_items, f, indent=2)
    print(f'\n[OK] Saved failed items list to failed_items.json')
