import os
from random import randint

# Loop through the days of the year
for i in range(1, 365):
    # For each day, randomly choose between 1 and 10 commits
    for j in range(0, randint(1, 10)):
        # Create the commit message
        d = str(i) + " days ago"

        # Append the commit to the file
        with open('file.txt', 'a') as file:
            file.write(d + "\n")
        
        # Run git commands to commit and push changes
        os.system('git add .')
        os.system(f'git commit --date="{d}" -m "commit"')  # Properly format the commit command
        os.system('git push -u origin main')  # Push the changes
