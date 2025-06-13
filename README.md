# WordPress Project Linting Configuration

This repository demonstrates a comprehensive linting setup for WordPress projects, ensuring code quality and consistency across PHP, JavaScript, and CSS/SCSS files.

## Features

- **PHP Linting**: Uses PHPCS (PHP Code Sniffer) with WordPress Coding Standards
- **JavaScript Linting**: ESLint with WordPress configuration
- **CSS/SCSS Linting**: Stylelint with standard SCSS configuration
- **GitHub Actions**: Automated linting on every push

## Configuration Files

### PHP Linting
- `.phpcs.xml`: Custom PHPCS configuration for WordPress projects
  - Enforces WordPress coding standards
  - Customized exclusions for specific rules
  - Handles both plugin and theme code

### JavaScript Linting
- ESLint configuration in `package.json`
- WordPress-specific rules
- Zero warnings policy

### CSS/SCSS Linting
- Stylelint configuration in `package.json`
- Standard SCSS rules
- Zero warnings policy

## GitHub Actions Workflow

The `.github/workflows/project-lint.yml` file contains our automated linting setup:

1. **PHP Setup**
   - PHP 8.0
   - PHPCS and PHPCBF tools
   - WordPress Coding Standards

2. **JavaScript/CSS Setup**
   - Node.js 20
   - ESLint with WordPress config
   - Stylelint with SCSS support

3. **Linting Process**
   - Automatic fixes where possible
   - Detailed error reporting
   - Zero warnings policy for JS/CSS

## Usage

1. Clone this repository
2. Install dependencies:
   ```bash
   composer install
   npm install
   ```
3. Run linting:
   ```bash
   # PHP
   ./vendor/bin/phpcs
   ./vendor/bin/phpcbf

   # JavaScript
   npx eslint 'src/**/*.js'

   # CSS/SCSS
   npx stylelint 'src/**/*.{css,scss}'
   ```

## Customization

- Modify `.phpcs.xml` to adjust PHP coding standards
- Update ESLint rules in `package.json`
- Adjust Stylelint configuration as needed

## Contributing

Feel free to submit issues and enhancement requests! 