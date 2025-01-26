# modify data.ts, add "tk" to the end of each line

import re

with open('data.ts', 'r') as f:
    lines = f.readlines()

for i in range(len(lines)):
    # Remove trailing whitespace and newline, add tk, then add newline back
    lines[i] = lines[i].rstrip() + 'tk\n'

with open('data.ts', 'w') as f: 
    f.writelines(lines)