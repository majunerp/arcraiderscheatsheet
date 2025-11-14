const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Base URL for the images - we'll try common patterns
const possibleBaseUrls = [
  'https://raidercheatsheet.fun/images/items/',
  'https://raidercheatsheet.fun/img/items/',
  'https://raidercheatsheet.fun/assets/items/',
  'https://raidercheatsheet.fun/items/'
];

// Create items directory if it doesn't exist
const itemsDir = path.join(__dirname, 'public', 'items');
if (!fs.existsSync(itemsDir)) {
  fs.mkdirSync(itemsDir, { recursive: true });
}

// List of all items from your items-data.ts
const itemIds = [
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
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve(true);
        });
      } else {
        fs.unlink(filepath, () => {});
        resolve(false);
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      resolve(false);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image download...\n');
  let successCount = 0;
  let failCount = 0;

  for (const itemId of itemIds) {
    let downloaded = false;

    // Try different image formats
    const formats = ['.png', '.jpg', '.webp'];

    for (const baseUrl of possibleBaseUrls) {
      if (downloaded) break;

      for (const format of formats) {
        const imageUrl = `${baseUrl}${itemId}${format}`;
        const filepath = path.join(itemsDir, `${itemId}.png`);

        // Skip if already exists
        if (fs.existsSync(filepath)) {
          console.log(`⊘ Skipped (exists): ${itemId}.png`);
          successCount++;
          downloaded = true;
          break;
        }

        const success = await downloadImage(imageUrl, filepath);
        if (success) {
          successCount++;
          downloaded = true;
          break;
        }
      }
    }

    if (!downloaded) {
      console.log(`✗ Failed: ${itemId}`);
      failCount++;
    }
  }

  console.log(`\n--- Download Summary ---`);
  console.log(`Success: ${successCount}/${itemIds.length}`);
  console.log(`Failed: ${failCount}/${itemIds.length}`);
}

downloadAllImages().catch(console.error);
