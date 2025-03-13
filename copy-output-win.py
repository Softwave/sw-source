# Program for copying files to my other directory

import os
import shutil

def copy_directory(source_dir, destination_dir):
    try:
        # Create the destination directory if it doesn't exist
        if not os.path.exists(destination_dir):
            os.makedirs(destination_dir)

        # Recursively copy all files and directories from the source to destination
        shutil.copytree(source_dir, destination_dir, dirs_exist_ok=True)

        print("All files copied successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage:
if __name__ == "__main__":
    source_directory = r"C:\Users\jcley\Documents\GitHub\site-source\_site"
    destination_directory = r"C:\Users\jcley\Documents\GitHub\softwave.github.io"
    copy_directory(source_directory, destination_directory)