# Image Download Guide

## Manual Download Instructions

Since automated downloads are encountering network issues, here's how to manually download the images from https://raidercheatsheet.fun/:

### Option 1: Browser DevTools (Recommended)

1. Open https://raidercheatsheet.fun/ in your browser
2. Open DevTools (F12)
3. Go to the Network tab
4. Filter by "Img" or "Media"
5. Scroll through the items on the page to load all images
6. Right-click each image in the Network tab and "Open in new tab"
7. Save each image to `public/items/` with the corresponding item ID as the filename

### Option 2: Browser Console Script

1. Open https://raidercheatsheet.fun/
2. Open browser console (F12 → Console tab)
3. Run this script to extract all image URLs:

```javascript
// Extract all item images
const itemImages = Array.from(document.querySelectorAll('img')).filter(img => {
  return img.src.includes('item') || img.alt.toLowerCase().includes('item');
}).map(img => ({
  src: img.src,
  alt: img.alt
}));

// Download as JSON
const dataStr = JSON.stringify(itemImages, null, 2);
const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
const exportFileDefaultName = 'item_images.json';
const linkElement = document.createElement('a');
linkElement.setAttribute('href', dataUri);
linkElement.setAttribute('download', exportFileDefaultName);
linkElement.click();
```

4. Use the JSON file with the automated download script

### Option 3: Use the GitHub Repository

The raidercheatsheet.fun website loads "378 items from GitHub" according to the console logs.
Try checking their GitHub repository for the images:

- https://github.com/raidercheatsheet (search for their repo)
- Look for an `/items/` or `/images/` or `/assets/` directory

### Item IDs You Need

Your project needs images for these 60 items:

1. leaper_pulse_unit
2. rocketeer_driver
3. surveyor_vault
4. hornet_driver
5. wasp_driver
6. snitch_scanner
7. spotter_relay
8. arc_alloy
9. advanced_electrical_components
10. exodus_modules
11. magnetic_accelerator
12. sensors
13. battery
14. electrical_components
15. wires
16. durable_cloth
17. steel_spring
18. rubber_parts
19. metal_parts
20. fabric
21. plastic_parts
22. antiseptic
23. syringe
24. water_pump
25. humidifier
26. cooling_fan
27. light_bulb
28. power_rod
29. broken_flashlight
30. broken_handheld_radio
31. damaged_arc_powercell
32. burned_arc_circuitry
33. ruined_accordion
34. alarm_clock
35. bicycle_pump
36. broken_taser
37. camera_lens
38. candle_holder
39. deflated_football
40. diving_goggles
41. expired_respirator
42. frying_pan
43. garlic_press
44. headphones
45. ice_cream_scooper
46. portable_tv
47. power_bank
48. projector
49. remote_control
50. ruined_baton
51. ruined_parachute
52. rusted_bolts
53. tattered_clothes
54. thermostat
55. torn_blanket
56. toaster
57. lemon
58. apricot
59. dog_collar

### File Naming Convention

Save each image as: `{item_id}.png` in the `public/items/` directory.

For example:
- `public/items/leaper_pulse_unit.png`
- `public/items/arc_alloy.png`
- etc.

## Automated Scripts (If Network Access Works)

If you have better network access or can bypass the SSL issues:

```bash
# Try the Python script
python download_images_v3.py
```

The script tries multiple URL patterns to find the images automatically.
