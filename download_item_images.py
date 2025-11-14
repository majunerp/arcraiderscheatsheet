import requests
from bs4 import BeautifulSoup
import os
import json
from urllib.parse import urljoin

# Create items directory
items_dir = 'public/items'
os.makedirs(items_dir, exist_ok=True)

# Fetch the webpage
print("Fetching raidercheatsheet.fun...")
url = 'https://raidercheatsheet.fun/'

try:
    response = requests.get(url, timeout=30)
    response.raise_for_status()
    print(f"✓ Successfully fetched page (status: {response.status_code})")
except Exception as e:
    print(f"✗ Failed to fetch page: {e}")
    exit(1)

# Parse HTML
soup = BeautifulSoup(response.text, 'html.parser')

# Find all images
all_images = soup.find_all('img')
print(f"\nFound {len(all_images)} total images on the page")

# Extract item images (looking for common patterns)
item_images = []
for img in all_images:
    src = img.get('src', '')
    alt = img.get('alt', '').lower()

    # Look for item-related images
    if any(keyword in src.lower() for keyword in ['item', 'icon', 'loot']) or \
       any(keyword in alt for keyword in ['item', 'loot', 'arc']):
        full_url = urljoin(url, src)
        item_images.append({
            'src': full_url,
            'alt': img.get('alt', ''),
            'title': img.get('title', '')
        })

print(f"Found {len(item_images)} item-related images")

# Save image data to JSON for inspection
with open('extracted_item_images.json', 'w', encoding='utf-8') as f:
    json.dump(item_images, f, indent=2)
print(f"✓ Saved image data to extracted_item_images.json")

# Download images
print("\nDownloading images...")
downloaded = 0
failed = 0

for idx, img_data in enumerate(item_images):
    img_url = img_data['src']

    # Generate filename from URL or alt text
    if img_data['alt']:
        filename = img_data['alt'].replace(' ', '_').lower() + '.png'
    else:
        filename = f"item_{idx}.png"

    # Clean filename
    filename = ''.join(c for c in filename if c.isalnum() or c in '._-')
    filepath = os.path.join(items_dir, filename)

    # Skip if exists
    if os.path.exists(filepath):
        print(f"⊘ Skipped (exists): {filename}")
        downloaded += 1
        continue

    try:
        img_response = requests.get(img_url, timeout=15)
        img_response.raise_for_status()

        with open(filepath, 'wb') as f:
            f.write(img_response.content)

        print(f"✓ Downloaded: {filename}")
        downloaded += 1
    except Exception as e:
        print(f"✗ Failed {filename}: {e}")
        failed += 1

print(f"\n--- Download Summary ---")
print(f"Success: {downloaded}/{len(item_images)}")
print(f"Failed: {failed}/{len(item_images)}")
