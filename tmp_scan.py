from pathlib import Path
lines=Path('lib/items-data.ts').read_text(encoding='utf-8').splitlines()
for i,line in enumerate(lines,1):
    if 'stella_montis' in line.lower():
        for j in range(i-2, i+5):
            if 1 <= j <= len(lines):
                print(f"{j:04d}: {lines[j-1]}")
        print('---')
