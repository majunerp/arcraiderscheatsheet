const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// List of all item images from the competitor website
const imageUrls = [
  'https://cdn.arctracker.io/items/water_pump.png',
  'https://cdn.arctracker.io/items/heavy_shield.png',
  'https://cdn.arctracker.io/items/damaged_heat_sink.png',
  'https://cdn.arctracker.io/items/breathtaking_snow_globe.png',
  'https://cdn.arctracker.io/items/expired_pasta.png',
  'https://cdn.arctracker.io/items/degraded_arc_rubber.png',
  'https://cdn.arctracker.io/items/complex_gun_parts.png',
  'https://cdn.arctracker.io/items/fine_wristwatch.png',
  'https://cdn.arctracker.io/items/dart_board.png',
  'https://cdn.arctracker.io/items/damaged_tick_pod.png',
  'https://cdn.arctracker.io/items/mod_components.png',
  'https://cdn.arctracker.io/items/rocket_thruster.png',
  'https://cdn.arctracker.io/items/poster_of_natural_wonders.png',
  'https://cdn.arctracker.io/items/explosive_compound.png',
  'https://cdn.arctracker.io/items/torn_book.png',
  'https://cdn.arctracker.io/items/fertilizer.png',
  'https://cdn.arctracker.io/items/damaged_rocketeer_driver.png',
  'https://cdn.arctracker.io/items/damaged_hornet_driver.png',
  'https://cdn.arctracker.io/items/moss.png',
  'https://cdn.arctracker.io/items/painted_box.png',
  'https://cdn.arctracker.io/items/music_box.png',
  'https://cdn.arctracker.io/items/rosary.png',
  'https://cdn.arctracker.io/items/damaged_wasp_driver.png',
  'https://cdn.arctracker.io/items/celestes_journal.png',
  'https://cdn.arctracker.io/items/unusable_weapon.png',
  'https://cdn.arctracker.io/items/bandage.png',
  'https://cdn.arctracker.io/items/leaper_pulse_unit.png',
  'https://cdn.arctracker.io/items/rocketeer_driver.png',
  'https://cdn.arctracker.io/items/surveyor_vault.png',
  'https://cdn.arctracker.io/items/hornet_driver.png',
  'https://cdn.arctracker.io/items/wasp_driver.png',
  'https://cdn.arctracker.io/items/snitch_scanner.png',
  'https://cdn.arctracker.io/items/spotter_relay.png',
  'https://cdn.arctracker.io/items/arc_alloy.png',
  'https://cdn.arctracker.io/items/advanced_electrical_components.png',
  'https://cdn.arctracker.io/items/exodus_modules.png',
  'https://cdn.arctracker.io/items/magnetic_accelerator.png',
  'https://cdn.arctracker.io/items/sensors.png',
  'https://cdn.arctracker.io/items/battery.png',
  'https://cdn.arctracker.io/items/electrical_components.png',
  'https://cdn.arctracker.io/items/wires.png',
  'https://cdn.arctracker.io/items/durable_cloth.png',
  'https://cdn.arctracker.io/items/steel_spring.png',
  'https://cdn.arctracker.io/items/rubber_parts.png',
  'https://cdn.arctracker.io/items/metal_parts.png',
  'https://cdn.arctracker.io/items/fabric.png',
  'https://cdn.arctracker.io/items/plastic_parts.png',
  'https://cdn.arctracker.io/items/antiseptic.png',
  'https://cdn.arctracker.io/items/syringe.png',
  'https://cdn.arctracker.io/items/humidifier.png',
  'https://cdn.arctracker.io/items/cooling_fan.png',
  'https://cdn.arctracker.io/items/light_bulb.png',
  'https://cdn.arctracker.io/items/power_rod.png',
  'https://cdn.arctracker.io/items/broken_flashlight.png',
  'https://cdn.arctracker.io/items/broken_handheld_radio.png',
  'https://cdn.arctracker.io/items/damaged_arc_powercell.png',
  'https://cdn.arctracker.io/items/burned_arc_circuitry.png',
  'https://cdn.arctracker.io/items/ruined_accordion.png',
  'https://cdn.arctracker.io/items/alarm_clock.png',
  'https://cdn.arctracker.io/items/bicycle_pump.png',
  'https://cdn.arctracker.io/items/broken_taser.png',
  'https://cdn.arctracker.io/items/camera_lens.png',
  'https://cdn.arctracker.io/items/candle_holder.png',
  'https://cdn.arctracker.io/items/deflated_football.png',
  'https://cdn.arctracker.io/items/diving_goggles.png',
  'https://cdn.arctracker.io/items/expired_respirator.png',
  'https://cdn.arctracker.io/items/frying_pan.png',
  'https://cdn.arctracker.io/items/garlic_press.png',
  'https://cdn.arctracker.io/items/headphones.png',
  'https://cdn.arctracker.io/items/ice_cream_scooper.png',
  'https://cdn.arctracker.io/items/portable_tv.png',
  'https://cdn.arctracker.io/items/power_bank.png',
  'https://cdn.arctracker.io/items/projector.png',
  'https://cdn.arctracker.io/items/remote_control.png',
  'https://cdn.arctracker.io/items/ruined_baton.png',
  'https://cdn.arctracker.io/items/ruined_parachute.png',
  'https://cdn.arctracker.io/items/rusted_bolts.png',
  'https://cdn.arctracker.io/items/tattered_clothes.png',
  'https://cdn.arctracker.io/items/thermostat.png',
  'https://cdn.arctracker.io/items/torn_blanket.png',
  'https://cdn.arctracker.io/items/toaster.png',
  'https://cdn.arctracker.io/items/lemon.png',
  'https://cdn.arctracker.io/items/apricot.png',
  'https://cdn.arctracker.io/items/dog_collar.png',
];

const outputDir = path.join(__dirname, 'public', 'items');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const filename = path.basename(url);
    const filepath = path.join(outputDir, filename);

    // Check if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`✓ Already exists: ${filename}`);
      resolve(filename);
      return;
    }

    const protocol = url.startsWith('https') ? https : http;

    console.log(`Downloading: ${filename}...`);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve(filename);
        });
      } else {
        console.error(`✗ Failed: ${filename} (Status: ${response.statusCode})`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`✗ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log(`Starting download of ${imageUrls.length} images...\n`);

  let success = 0;
  let failed = 0;

  for (const url of imageUrls) {
    try {
      await downloadImage(url);
      success++;
    } catch (err) {
      failed++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Download complete!`);
  console.log(`Success: ${success}/${imageUrls.length}`);
  console.log(`Failed: ${failed}`);
  console.log(`Images saved to: ${outputDir}`);
}

downloadAll().catch(console.error);
