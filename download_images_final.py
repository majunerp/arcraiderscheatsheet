import requests
from bs4 import BeautifulSoup
import os
import re
from pathlib import Path

def normalize_name(name):
    """Convert item name to URL format (lowercase with underscores)"""
    # Remove special characters and convert to lowercase
    name = name.lower()
    # Replace apostrophes and other special chars
    name = name.replace("'", "")
    name = name.replace("'", "")
    # Replace spaces with underscores
    name = name.replace(" ", "_")
    # Remove any remaining special characters except underscores
    name = re.sub(r'[^a-z0-9_]', '', name)
    return name

def download_image(url, save_path):
    """Download an image from URL to save_path"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()

        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(save_path), exist_ok=True)

        with open(save_path, 'wb') as f:
            f.write(response.content)
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def main():
    # Fetch the competitor website
    print("Fetching competitor website...")
    url = "https://raidercheatsheet.fun/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract all image URLs
    print("Extracting image URLs...")
    images = soup.find_all('img', src=re.compile(r'cdn\.arctracker\.io/items/'))

    image_map = {}
    for img in images:
        src = img.get('src')
        alt = img.get('alt', '')
        if src and 'cdn.arctracker.io/items/' in src:
            # Extract filename from URL
            filename = src.split('/')[-1]
            item_name = filename.replace('.png', '').replace('_', ' ').title()
            image_map[normalize_name(alt)] = src
            print(f"Found: {alt} -> {src}")

    print(f"\nTotal images found: {len(image_map)}")

    # Create items directory
    items_dir = Path(__file__).parent / 'public' / 'items'
    items_dir.mkdir(parents=True, exist_ok=True)

    # Download all images
    print(f"\nDownloading images to {items_dir}...")
    success_count = 0
    failed_items = []

    for normalized_name, url in image_map.items():
        filename = url.split('/')[-1]
        save_path = items_dir / filename

        if save_path.exists():
            print(f"✓ Already exists: {filename}")
            success_count += 1
        else:
            print(f"Downloading: {filename}...")
            if download_image(url, str(save_path)):
                print(f"✓ Downloaded: {filename}")
                success_count += 1
            else:
                failed_items.append(filename)

    print(f"\n{'='*60}")
    print(f"Download complete!")
    print(f"Success: {success_count}/{len(image_map)}")
    if failed_items:
        print(f"Failed: {len(failed_items)}")
        for item in failed_items:
            print(f"  - {item}")

    # Create a mapping report
    print(f"\n{'='*60}")
    print("Creating item name mapping report...")

    # Read your items data to check matches
    import json
    try:
        with open('lib/items-data.ts', 'r', encoding='utf-8') as f:
            content = f.read()
            # Extract item names from the TypeScript file
            item_names = re.findall(r"name:\s*'([^']+)'", content)

            print(f"\nYour items: {len(item_names)}")
            print(f"Downloaded images: {len(image_map)}")

            # Check which items have matching images
            matched = []
            unmatched = []

            for item_name in item_names:
                normalized = normalize_name(item_name)
                expected_file = f"{normalized}.png"
                file_path = items_dir / expected_file

                if file_path.exists():
                    matched.append(item_name)
                else:
                    unmatched.append(item_name)

            print(f"\nMatched items: {len(matched)}")
            print(f"Unmatched items: {len(unmatched)}")

            if unmatched:
                print("\nUnmatched items (no image found):")
                for item in unmatched[:20]:  # Show first 20
                    print(f"  - {item} (expected: {normalize_name(item)}.png)")
                if len(unmatched) > 20:
                    print(f"  ... and {len(unmatched) - 20} more")

    except Exception as e:
        print(f"Could not create mapping report: {e}")

if __name__ == "__main__":
    main()
