![AutoCopyrighter](res/banner.png)

AutoCopyrighter is a VS Code extension that can automatically include your
copyright and license (if you have one) in your source code.

It is a continuation of the now seemingly deprecated extension
[Copyrighter, by Max Wilkinson](https://github.com/max-wilkinson/copyrighter).
It only includes a few minor changes to the original codebase.

## Background

Manually including a copyright and license takes time and cognitive energy away
from coding.
By automating the process, you are free to focus on doing what you love -
building software!

## Features

When you open a supported file type, AutoCopyrighter will automatically add
your copyright notice (and optional license), if they are missing.

New files will be created with the copyright notice (and optional license) automatically injected at the top of the file.

You can utilize the VS Code command "Add Copyright", to manually add your
copyright notice to the current file.

## Requirements

This extension is designed to work right out of the box.
No configuration is required in order to get started.

However, there are a couple extension settings (documented below) that you can
utilize to enhance the experience.

## Extension Settings

This extension contributes the following settings:

- `autoCopyrighter.author`: Set the author (or company) that holds the copyright
- `autoCopyrighter.license`: Select a license header to include with your
copyright.
If no license is selected, then only the copyright will be added to files.

## License

AutoCopyrighter is licensed under the [Apache 2.0 License](LICENSE).

Almost all the code was written by
[Max Wilkinson](https://github.com/max-wilkinson), with only very minor
changes from me.
