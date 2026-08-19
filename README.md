# Lenovo YT3-X90F (Yoga Tab 3 10 · Wi‑Fi) — Android 6.0 માટે બે સાબિત એપ્સ

> **ચકાસણી તારીખ: 2026-08-19** — આ દસ્તાવેજમાંની દરેક હકીકત આ તારીખે live વેબ સર્ચ વડે
> અધિકૃત સોર્સ પરથી ચકાસેલી છે (સોર્સની લિંક્સ છેલ્લા વિભાગમાં છે).
> અગાઉના તબક્કામાં પસંદ કરેલી બે એપ્સ — **Opera Mini** (બ્રાઉઝર) અને **VLC for Android**
> (વિડિયો પ્લેયર) — બંને **આજે પણ Android 6.0 પર ચાલે છે** અને અધિકૃત સોર્સમાંથી
> ઉપલબ્ધ છે. આ repo માં કોઈ APK commit થયું નથી અને કોઈ વેબસાઇટ નથી — ફક્ત
> દસ્તાવેજ + ચકાસણીપાત્ર ડાઉનલોડ સ્ક્રિપ્ટ.

---

## ડિવાઇસ પ્રોફાઇલ — YT3-X90F

| ઘટક | વિગત |
|---|---|
| મોડેલ | Lenovo Yoga Tab 3 10″ Wi‑Fi (`YT3-X90F`) |
| SoC | Qualcomm Snapdragon 212 (4× ARM Cortex-A7 @ 1.3 GHz) |
| GPU | Adreno 304 |
| RAM | 2 GB |
| સ્ટોરેજ | 16 GB + microSD સ્લોટ |
| OS | Android 6.0 (Marshmallow) |
| CPU આર્કિટેક્ચર | **32-bit ARM — `armeabi-v7a`** (arm64 APK ચાલશે નહીં) |

> ⚠️ APK હાથથી ડાઉનલોડ કરો ત્યારે હંમેશા **armeabi-v7a (ARM7/32-bit)** વેરિઅન્ટ જ પસંદ કરો.
> Play Store આ આપમેળે સાચું કરે છે. [સ્પેક સોર્સ](https://www.devicespecifications.com/en/model/efb03650)

---

# 1. Opera Mini — હળવો અને આજે પણ અપડેટ થતો બ્રાઉઝર

| માહિતી | વિગત |
|---|---|
| **એપનું નામ** | Opera Mini — Fast Web Browser (package: `com.opera.mini.native`, developer: Opera) |
| **વર્તમાન version** | **99.x** — 99.4.2254.1608 / 99.5.2254.2012 (2026; Play Store આપમેળે નવી આપે છે) |
| **Minimum Android** | **Android 6.0** (99.x શ્રેણી) — અગાઉની શ્રેણી 90.1 (2025) Android 5.0–5.1 માટે હતી |
| **લાઇસન્સ** | Proprietary (freeware, Operaની EULA) — open-source નથી |
| **APK કદ** | ≈ 55–57 MB (armeabi-v7a + arm64-v8a, nodpi) |
| **અધિકૃત ડાઉનલોડ લિંક્સ** | [Play Store](https://play.google.com/store/apps/details?id=com.opera.mini.native) · [opera.com/mini](https://www.opera.com/mini) |

### શા માટે YT3-X90F પર ચાલશે?
- Opera Mini 99.x નું minimum Android **બરાબર 6.0** છે — તમારા ટેબલેટનું Android 6.0.x એમાં આવી જાય છે.
- APK માં **armeabi-v7a** build સમાયેલો છે → Snapdragon 212 (32-bit) પર ઇન્સ્ટોલ થાય છે.
- ડેટા-સેવિંગ mode માં પેજ Operaના server પર રેન્ડર થાય છે — ડિવાઇસ પર CPU/RAMનો ભાર ઘણો ઓછો રહે છે, જે 2 GB RAM + Cortex-A7 માટે યોગ્ય છે.
- મોટા વેન્ડર્સ (Google, Mozilla, Brave, Vivaldi) એ Android 6 નો સાથ છોડી દીધો છે; **Opera Mini એ અપવાદ છે જે 2026 માં પણ Android 6.0 ને અપડેટ સાથે સપોર્ટ કરે છે.**

### RAM / storage હળવી settings
1. **Data savings = Extreme** રાખો (Opera menu → Data savings) — પેજ server પર રેન્ડર થાય, ડિવાઇસ ઠંડું રહે અને ડેટા બચે.
2. **Built-in Ad blocker ચાલુ** રાખો — જાહેરાતની સ્ક્રિપ્ટ ન ચાલવાથી RAM/CPU બચે છે.
3. **News feed, AI chat, football અને notifications બંધ** કરો (Settings માં) — background પ્રવૃત્તિ ઘટે.
4. એકસાથે **5 થી વધુ tabs ખુલ્લા ન રાખો**; વપરાયેલા tabs બંધ કરો.
5. અઠવાડિયે એક વાર **Settings → Clear browsing data** (cache) કરો; offline pages મર્યાદિત રાખો.

### સુરક્ષિત installation steps (ફક્ત Play Store)
1. ટેબલેટ પર **Play Store** ખોલો → "Opera Mini" શોધો → developerનું નામ **Opera** છે તે ચકાસો.
2. Install કરો. Play Store જાતે જ તમારા ડિવાઇસ માટે યોગ્ય (armeabi-v7a) વર્ઝન આપશે.
3. **Play Protect ચાલુ** રાખો (Play Store → Play Protect).
4. Opera Mini **ક્યારેય** બીજી કોઈ APK સાઇટ પરથી sideload કરશો નહીં — તે proprietary એપ છે અને તૃતીય-પક્ષ ફાઇલોમાં માલવેર ભેળવાયેલો હોઈ શકે છે. આ repo માં પણ એનું APK નથી.

### પ્રામાણિક સુરક્ષા નોંધ
- **Extreme / High data-savings mode** માં ટ્રાફિક Operaના server થઈને (TLS એન્ક્રિપ્ટેડ) જાય છે — એ એન્જિન Opera અપડેટ કરતી રહે છે.
- **Data savings = Off** મોડમાં Opera Mini Androidનું *system WebView* વાપરે છે, અને Android 6 માટે WebView/Chromeનું છેલ્લું અપડેટ **Chromium 106 (ઑક્ટો 2022)** હતું — એટલે હળવાશ + તાજગી માટે Extreme mode પસંદ કરો.
- પ્રાઇવસી માટે **Incognito/private tabs** (PIN lock સાથે) વાપરો. EULA: [opera.com/eula/mobile](https://www.opera.com/eula/mobile) · Privacy: [opera.com/privacy](https://www.opera.com/privacy)

---

# 2. VLC for Android — લોકલ વિડિયો માટે ઓપન-સોર્સ પ્લેયર

| માહિતી | વિગત |
|---|---|
| **એપનું નામ** | VLC for Android (VideoLAN / VideoLabs; package: `org.videolan.vlc`) |
| **વર્તમાન version** | **3.7.1** (અધિકૃત mirror પર 14-Jul-2026; F-Droid પર 3.7.1; Play Store પર 3.7.x) |
| **Minimum Android** | **Android 4.2** (અધિકૃત પેજ: "Supports Android Version 4.2 or later for current version") |
| **લાઇસન્સ** | **GPL-2.0-or-later** (ઓપન સોર્સ — source: [code.videolan.org](https://code.videolan.org/videolan/vlc-android)) |
| **APK કદ** | armeabi-v7a build ≈ 47 MB |
| **અધિકૃત ડાઉનલોડ લિંક્સ** | [Play Store](https://play.google.com/store/apps/details?id=org.videolan.vlc) · [અધિકૃત APK mirror](https://get.videolan.org/vlc-android/3.7.1/) · [F-Droid](https://f-droid.org/en/packages/org.videolan.vlc/) · [અધિકૃત પેજ](https://www.videolan.org/vlc/download-android.html) |

### શા માટે YT3-X90F પર ચાલશે?
- VLC નું minimum Android **4.2** છે → તમારું 6.0 એનાથી ઘણું આગળ છે.
- VideoLAN **armeabi-v7a APK** અધિકૃત રીતે પ્રકાશિત કરે છે → 32-bit Snapdragon 212 માટે સીધું બંધબેસે.
- Adreno 304 **H.264/MPEG-2/VC-1 hardware decoding** કરી શકે છે → સ્થાનિક ફાઇલો (720p/1080p) CPU પર ભાર વિના સરળ ચાલે.
- એક પણ કોડેક પૅક વિના બધા ફોર્મેટ ચાલે છે (MKV, MP4, AVI, srt સબટાઇટલ સાથે).

### RAM / storage હળવી settings
1. **Settings → Video → Hardware acceleration = ચાલુ** (ડિફોલ્ટ છે, એમ જ રાખો) — battery/CPU બચે.
2. **Settings → Media library folders** માં ફક્ત વિડિયોનું ફોલ્ડર (microSD) પસંદ કરો; સંગીત/ફોટા સ્કેન બંધ રાખો — સ્કેનિંગ ઓછું = RAM ઓછી.
3. જરૂર ન હોય તો **Audio passthrough, equalizer, video previews/thumbnails બંધ** રાખો (નાની 16 GB જગ્યા બચે).
4. મોટી ફાઇલો microSD કાર્ડ પર રાખો; એપ પોતે internal સ્ટોરેજ પર રાખો.
5. ભારે કોડેક (દા.ત. 4K/AV1) વાળી ફાઇલો આ ડિવાઇસ માટે નથી — 1080p H.264 સુધી આદર્શ.

### સુરક્ષિત installation steps (ત્રણ રસ્તા — કોઈપણ એક)

**રસ્તો A — Play Store (સૌથી સરળ):** Play Store માં "VLC" શોધો (developer: VideoLabs) → Install. યોગ્ય ABI આપોઆપ.

**રસ્તો B — F-Droid (ઓપન-સોર્સ સ્ટોર):** [f-droid.org](https://f-droid.org/) પરથી F-Droid એપ ઇન્સ્ટોલ કરો → "VLC" શોધો → Install.

**રસ્તો C — અધિકૃત APK + checksum ચકાસણી (આ repoની સ્ક્રિપ્ટ):**

```bash
./scripts/download-vlc.sh            # VLC 3.7.1 armeabi-v7a → downloads/ ફોલ્ડરમાં
```

સ્ક્રિપ્ટ અધિકૃત `get.videolan.org` mirror પરથી APK + અધિકૃત `.sha256` ફાઇલ લાવીને
**બે-સ્તરીય ચકાસણી** કરે છે (અધિકૃત checksum ફાઇલ + repoમાં pinned hash). ચકાસણી
નિષ્ફળ જાય તો ફાઇલ ડિલીટ થઈ જાય છે. ત્યાર પછી:

1. ટેબલેટમાં: **Settings → Security → Unknown sources** ચાલુ કરો (ફક્ત એક વાર).
2. APK USB/Bluetooth થી ટેબલેટમાં મૂકીને ફાઇલ પર ટેપ કરો — અથવા PC પરથી `adb install VLC-Android-3.7.1-armeabi-v7a.apk`.
3. ઇન્સ્ટોલ પછી **Unknown sources ફરી બંધ** કરો.

> ⚠️ Play Store/official APK અને F-Droid બિલ્ડની **signatures અલગ છે** — એકમાંથી બીજામાં
> જતાં પહેલાં જૂની ઇન્સ્ટોલેશન uninstall કરવી પડે છે.

---

## Reproducible ડાઉનલોડ સ્ક્રિપ્ટ

`scripts/download-vlc.sh` ફક્ત **અધિકૃત સોર્સ** વાપરે છે અને કોઈ ફાઇલ repoમાં commit થતી નથી:

| પગલું | શું થાય છે |
|---|---|
| 1 | `https://get.videolan.org/vlc-android/3.7.1/VLC-Android-3.7.1-armeabi-v7a.apk` (HTTPS, VideoLANનું અધિકૃત mirror) પરથી ડાઉનલોડ |
| 2 | એ જ server પરથી અધિકૃત `.apk.sha256` લાવીને `sha256sum -c` ચકાસણી |
| 3 | 3.7.1 માટે **pinned SHA-256** `0ff38062e17e1ace4b85d459ff25dfeb0017fc931578ce918979abfb0e2f6124` સામે બીજી ચકાસણી |
| 4 | નિષ્ફળતા પર ફાઇલ ડિલીટ + exit 1 (સ્ક્રિપ્ટ એમ આ રીતે ટેસ્ટ થઈ છે) |

અદ્યતન: `VLC_BASE_URL=<mirror-url> ./scripts/download-vlc.sh` થી બીજું અધિકૃત mirror પસંદ કરી શકાય; `./scripts/download-vlc.sh 3.7.0` થી બીજી version (પણ અધિકૃત `.sha256` ચકાસણી સાથે જ).

> Opera Mini માટે સ્ક્રિપ્ટ ઇરાદાપૂર્વક નથી: તે **proprietary** છે, Opera અધિકૃત APK સીધું આપતી નથી
> (ફક્ત Play Store), અને તમારા નિયમ પ્રમાણે અજાણી APK સાઇટમાંથી કંઈ લાવવું નથી.

---

## બીજા લોકપ્રિય વિકલ્પો આજે Android 6.0 પર કેમ નથી?

| એપ | આજની સ્થિતિ (ઑગસ્ટ 2026) |
|---|---|
| Firefox / Fennec / Focus / Klar | Firefox **144 થી minimum Android 8.0**; Android ≤7 માટે **143 છેલ્લી** (ઑક્ટો 2025, હવે અપડેટ નથી) |
| Brave | હાલની version **Android 8+/10+** માંગે છે; Android 6 માટેની છેલ્લી version વર્ષો જૂની છે |
| Chrome / system WebView | Android 6 માટે **Chromium 106 (ઑક્ટો 2022)** છેલ્લું — WebView-આધારિત બ્રાઉઝર (Via, SmartCookieWeb, Lightning) એ જ જૂના એન્જિન પર ચાલે છે |
| Pale Moon for Android | જાળવણી બંધ (forum board locked/"not maintained"; Play યાદી 25.9.6, 2016) |
| **Opera Mini** | ✅ **99.x (2026) — minimum Android 6.0, હજુ સક્રિય અપડેટ** — મોટા વેન્ડર્સમાં અપવાદ |

**વૈકલ્પિક:** જો ઓપન-સોર્સ એન્જિન જ જોઈતું હોય, તો **Firefox 143** (MPL-2.0) એ Mozilla ની
Android 6 માટેની છેલ્લી અધિકૃત version છે — Play Store તમારા ડિવાઇસ પર આપમેળે એ જ ઇન્સ્ટોલ કરશે;
અધિકૃત APK અહીં છે: `archive.mozilla.org/pub/fenix/releases/143.0/android/fenix-143.0-android-armeabi-v7a/`.
નોંધ: ઑક્ટો 2025 પછી એમાં સુરક્ષા અપડેટ નથી આવતા, એટલે પ્રાથમિક ભલામણ Opera Mini જ છે.

---

## સામાન્ય સુરક્ષા નિયમો (Android 6.0 ડિવાઇસ પર)

1. Android 6.0 પોતે 2018 થી OS-સ્તરના security patch મેળવતું નથી — એટલે **ફક્ત જાણીતી એપ્સ, ફક્ત અધિકૃત સ્ત્રોત**.
2. **Play Protect ચાલુ** રાખો; "Unknown sources" ફક્ત જરૂર પડે ત્યારે, અને ઇન્સ્ટોલ પછી બંધ.
3. કોઈ "modded/premium-unlocked" APK ઇન્સ્ટોલ ન કરો — તે જ મોટો માલવેર-રસ્તો છે.
4. બંને એપ્સ સમયાંતરે Play Store માંથી અપડેટ થતી રહે તે ચકાસો.

---

## Repo માળખું અને લાઇસન્સ

```
YT3-X90F-Lenovo/
├── README.md                  ← આ દસ્તાવેજ (ગુજરાતી)
├── LICENSE                    ← આ repoની સ્ક્રિપ્ટ/લખાણ માટે MIT
└── scripts/
    └── download-vlc.sh        ← VLC armeabi-v7a અધિકૃત ડાઉનલોડ + checksum ચકાસણી
```

- **VLC for Android** — GPL-2.0-or-later, © VideoLAN. સ્ક્રિપ્ટ ફક્ત અધિકૃત સોર્સમાંથી ડાઉનલોડ કરાવે છે; APK repoમાં નથી.
- **Opera Mini** — proprietary (Opera EULA); ડાઉનલોડ ફક્ત Play Store થી; કોઈ ફાઇલ repoમાં નથી.
- આ repoનું પોતાનું લખાણ/સ્ક્રિપ્ટ MIT લાઇસન્સ હેઠળ છે.

---

## સંદર્ભ યાદી (2026-08-19 ના રોજ ચકાસેલા)

1. [VLC અધિકૃત ડાઉનલોડ પેજ](https://www.videolan.org/vlc/download-android.html) — "Supports Android Version 4.2 or later for current version", ARMv7/ARMv8/x86 support
2. [VLC 3.7.1 અધિકૃત mirror](https://get.videolan.org/vlc-android/3.7.1/) — `VLC-Android-3.7.1-armeabi-v7a.apk` + `.sha256`
3. [VLC F-Droid પેજ](https://f-droid.org/en/packages/org.videolan.vlc/) — 3.7.1, "requires Android 4.2", armeabi-v7a build
4. [VLC source code](https://code.videolan.org/videolan/vlc-android) — GPL-2.0-or-later
5. [Opera Mini — Play Store](https://play.google.com/store/apps/details?id=com.opera.mini.native) અને [opera.com/mini](https://www.opera.com/mini)
6. [Wikipedia: Opera Mini — release compatibility](https://en.wikipedia.org/wiki/Opera_Mini) — Android 6.0+ → 99.4 (2026); Android 5.0–5.1 → 90.1 (2025); engine modes (Extreme = server-side Presto; અન્ય = system WebView)
7. [Mozilla blog: Raising the Minimum Android Version for Firefox](https://blog.mozilla.org/futurereleases/2025/09/15/raising-the-minimum-android-version-for-firefox/) — Firefox 144+ = Android 8.0; 143 = Android ≤7 માટે છેલ્લી
8. [support.mozilla.org — Will Firefox work on my mobile device?](https://support.mozilla.org/en-US/kb/will-firefox-work-my-mobile-device) — minimum Android 8.0
9. [Mozilla archive — fenix 143.0 (armeabi-v7a)](https://archive.mozilla.org/pub/fenix/releases/143.0/android/fenix-143.0-android-armeabi-v7a/)
10. [chromium-dev PSA](https://groups.google.com/a/chromium.org/g/chromium-dev/c/z_RvoPoIeoM) — Chrome M106 = Android 6.0 માટે છેલ્લું
11. [Pale Moon forum — Android board](https://forum.palemoon.org/viewforum.php?f=39) — "Pale Moon for Android is NOT maintained" (board locked)
12. [APKMirror — Brave variants](https://www.apkmirror.com/apk/brave-software/brave-browser/) — વર્તમાન Brave builds Android 8+/9+/10+
13. [DeviceSpecifications — Lenovo Yoga Tab 3 10](https://www.devicespecifications.com/en/model/efb03650) — Snapdragon 212, Cortex-A7, 2 GB RAM, 16 GB

*નોંધ: Play Store હંમેશા તમારા ડિવાઇસ માટે યોગ્ય (ABI + OS) version જ ઓફર કરે છે — તેથી ઉપરના
version નંબર ભવિષ્યમાં બદલાય તો પણ ઇન્સ્ટોલેશન સુરક્ષિત રહેશે.*
