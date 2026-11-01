# NOVA — frontend webáruház-demó

## Indítás
1. Csomagold ki a `nova-webshop.zip` fájlt.
2. Nyisd meg a mappát Visual Studio Code-ban.
3. Indítsd el az `index.html` fájlt Live Serverrel (vagy nyisd meg közvetlenül böngészőben).
4. A külső termékképekhez internetkapcsolat szükséges.

## Projektstruktúra
```text
nova-webshop/
├── index.html
├── products.html
├── product.html
├── cart.html
├── checkout.html
├── login.html
├── register.html
├── profile.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── products.js
│   ├── cart.js
│   ├── checkout.js
│   └── auth.js
└── assets/
    └── images/
```

## Megvalósított funkciók
- Reszponzív főoldal, kategóriák és termékkártyák.
- Katalógus kereséssel, kategória- és ár-szűréssel, rendezéssel.
- Termékadatlap mennyiségválasztóval és kapcsolódó termékekkel.
- Kosár hozzáadás/törlés/mennyiségállítás és localStorage mentés.
- Szállítási költség és végösszeg számítása.
- Többlépéses jellegű pénztári űrlap, validáció, rendelési összesítés.
- Demóregisztráció, bejelentkezés, profil és rendelési előzmények.
- Kedvencek, toast értesítések és mobil navigáció.

## Fontos korlátozások
Ez kizárólag frontend-demó. Nincs backend, adatbázis, valódi készletkezelés, biztonságos hitelesítés vagy fizetési szolgáltató. A felhasználói adatok és a kosár a böngésző localStorage tárhelyén vannak. Éles webáruházhoz szerveroldali API, adatbázis, jelszó-hash, adatvédelmi megfelelés és fizetési szolgáltató szükséges.
