# Pockex

Pockex is a Flutter mobile app for exchange office and cash register workflows.
It helps operators manage rates, buy/sell and cross-currency trades, customers, and daily balances from one interface.

## Core Features

- Market rates and manual rate updates
- Buy, sell, and cross transactions
- Customer directory and transaction history
- Cash register status and day logs
- Local backup and restore
- Multi-language UI: en, ru, de, es, zh, ja, ko, hi, tr
- Subscription support via RevenueCat (Apple/Google)

## Tech Stack

- Flutter + Dart (`sdk: ^3.9.0`)
- Key packages: `intl`, `path_provider`, `file_picker`, `share_plus`, `url_launcher`
- Subscription packages: `purchases_flutter`, `purchases_ui_flutter`

## Project Structure

- `lib/` - application code (pages, models, data, localization, theme)
- `assets/` - icons, branding, fonts
- `web/landing/` - landing website and legal pages

## Getting Started

### Requirements

- Flutter SDK compatible with Dart 3.9
- Android Studio and/or Xcode for mobile builds

### Run locally

```bash
flutter pub get
flutter run
```

### Build

```bash
flutter build apk
flutter build ios
flutter build web
```

## Legal

- Privacy Policy: https://nikolasnovo.github.io/Pockex/privacy.html
- Terms of Use: https://nikolasnovo.github.io/Pockex/terms.html
- Delete Account: https://nikolasnovo.github.io/Pockex/delete-account.html

## Support

- Email: info.pockex@gmail.com
- Developer: QuantumBox by Nikolas Novo
