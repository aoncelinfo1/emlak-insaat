# Emlak ve İnşaat: Android APK

Bu klasör oyunu Android uygulamasına (APK) çeviren hazır bir Capacitor projesidir.
Oyunun kendisi `www/index.html` dosyasıdır. three.js kütüphaneleri internetsiz çalışması için
APK'ya gömülür. Yazı tipleri (Google Fonts) internet varsa yüklenir, yoksa telefonun varsayılan yazı tipi kullanılır.

## Yol 1: Bilgisayarında kur (Android Studio)
1. Node.js 18+ ve Android Studio kur (Android Studio ilk açılışta SDK'yı indirir).
2. Bu klasörde terminal aç:
   ```
   npm install
   npm run libs
   npx cap add android
   npx cap sync android
   npx cap open android
   ```
3. Android Studio açılınca Build > Build Bundle(s) / APK(s) > Build APK(s) seç.
4. Çıkan dosya: `android/app/build/outputs/apk/debug/app-debug.apk`
5. APK'yı telefona gönder, aç. Telefon "bilinmeyen kaynaktan kurulum" izni isteyebilir, izin ver.

Komut satırıyla da olur: `npm run android:apk` (Java 17 ve Android SDK gerekir).

## Yol 2: GitHub ile bulutta derle (bilgisayara Android Studio kurmadan)
1. GitHub'da boş bir depo aç ve bu klasörün içeriğini yükle (`.github` klasörü de dahil).
2. Depoda Actions sekmesi > "APK olustur" > Run workflow.
3. Bitince çalışmanın altındaki "emlak-insaat-apk" dosyasını indir, içinden `app-debug.apk` çıkar.
4. APK'yı telefona gönder ve kur.

## Oyunu güncellemek
Oyun değiştiğinde yeni `index.html` dosyasını `www` klasörüne koy ve APK'yı yeniden derle.
Kayıt (ilerleme) telefonun içinde uygulamaya özel saklanır. Uygulamayı silersen kayıt da silinir.

## Not
Bu "debug" APK'dır, kendi telefonunda denemek içindir. Google Play'de yayınlamak için imzalı sürüm gerekir.
