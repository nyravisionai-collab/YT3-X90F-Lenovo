#!/usr/bin/env bash
#
# download-vlc.sh — VLC for Android (armeabi-v7a) અધિકૃત, ચકાસણીપાત્ર ડાઉનલોડ
# =============================================================================
# Lenovo YT3-X90F (Yoga Tab 3 10, 32-bit ARM, Android 6.0) માટે યોગ્ય build.
#
# ઉપયોગ:
#   ./scripts/download-vlc.sh            # VLC 3.7.1 — ભલામણ (ડિફોલ્ટ)
#   ./scripts/download-vlc.sh 3.7.0      # બીજી અધિકૃત version
#
# આ સ્ક્રિપ્ટ શું કરે છે:
#   1. VideoLAN ના અધિકૃત mirror — https://get.videolan.org (HTTPS) પરથી
#      VLC-Android-<version>-armeabi-v7a.apk ડાઉનલોડ કરે છે.
#   2. એ જ server પરથી અધિકૃત .apk.sha256 ફાઇલ લાવીને `sha256sum -c` વડે
#      ચકાસે છે (તૂટેલી/છેડછાડ થયેલી ફાઇલ તરત પકડાય છે).
#   3. ડિફોલ્ટ 3.7.1 માટે નીચે નોંધેલા pinned SHA-256 સામે પણ સરખાવે છે
#      (બે-સ્તરીય ચકાસણી — ભવિષ્યમાં mirror બદલાય તો પણ રક્ષણ રહે છે).
#   4. કોઈ પણ ચકાસણી નિષ્ફળ જાય તો ફાઇલો ડિલીટ કરીને બંધ થઈ જાય છે.
#
# ડાઉનલોડ થયેલી ફાઇલ downloads/ માં રહે છે — .gitignore ને કારણે એ
# repo માં commit થતી નથી (કોઈ APK આ repo માં upload થતું નથી).
#
# લાઇસન્સ: VLC for Android એ GPL-2.0-or-later હેઠળ VideoLAN નું છે.
# આ સ્ક્રિપ્ટ ફક્ત અધિકૃત સોર્સમાંથી ફાઇલ લાવીને ચકાસે છે.

set -euo pipefail

VERSION="${1:-3.7.1}"

# VLC 3.7.1 (armeabi-v7a) નું અધિકૃત SHA-256.
# સોર્સ: https://get.videolan.org/vlc-android/3.7.1/VLC-Android-3.7.1-armeabi-v7a.apk.sha256
# (2026-08-19 ના રોજ અધિકૃત પેજ પરથી નોંધેલું). બીજી version પસંદ કરો ત્યારે
# પણ અધિકૃત .sha256 ફાઇલ સામે ચકાસણી થાય છે; આ pinned હેશ ફક્ત 3.7.1 માટે છે.
PINNED_SHA256="0ff38062e17e1ace4b85d459ff25dfeb0017fc931578ce918979abfb0e2f6124"

# અદ્યતન વપરાશ: બીજા mirror અથવા સ્થાનિક પરીક્ષણ માટે VLC_BASE_URL
# override કરી શકાય છે, દા.ત.  VLC_BASE_URL=https://example.com/mirror/vlc-android/3.7.1
BASE_URL="${VLC_BASE_URL:-https://get.videolan.org/vlc-android/${VERSION}}"
APK_NAME="VLC-Android-${VERSION}-armeabi-v7a.apk"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="${SCRIPT_DIR}/../downloads"

for tool in curl sha256sum; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "ભૂલ: '$tool' ઉપલબ્ધ નથી. કૃપા કરીને પહેલાં ઇન્સ્ટોલ કરો." >&2
    exit 1
  fi
done

mkdir -p "$OUT_DIR"
cd "$OUT_DIR"

echo "→ ડાઉનલોડ કરી રહ્યા છીએ: ${BASE_URL}/${APK_NAME}"
curl -fL --retry 3 --connect-timeout 30 -o "${APK_NAME}" "${BASE_URL}/${APK_NAME}"

echo "→ અધિકૃત checksum ફાઇલ લાવી રહ્યા છીએ: ${APK_NAME}.sha256"
curl -fL --retry 3 --connect-timeout 30 -o "${APK_NAME}.sha256" "${BASE_URL}/${APK_NAME}.sha256"

echo "→ અધિકૃત .sha256 ફાઇલ સામે ચકાસણી..."
if ! sha256sum -c "${APK_NAME}.sha256"; then
  echo "ભૂલ: અધિકૃત checksum ચકાસણી નિષ્ફળ! ફાઇલ કાઢી નાખવામાં આવી." >&2
  rm -f "${APK_NAME}" "${APK_NAME}.sha256"
  exit 1
fi

ACTUAL_SHA="$(sha256sum "${APK_NAME}" | awk '{print $1}')"
if [ "$VERSION" = "3.7.1" ]; then
  if [ "$ACTUAL_SHA" != "$PINNED_SHA256" ]; then
    echo "ભૂલ: pinned SHA-256 સાથે મેળ નથી! ફાઇલ કાઢી નાખવામાં આવી." >&2
    rm -f "${APK_NAME}" "${APK_NAME}.sha256"
    exit 1
  fi
  echo "✓ Pinned SHA-256 પણ મેળ ખાય છે (બે-સ્તરીય ચકાસણી પાસ)."
else
  echo "નોંધ: pinned hash ફક્ત 3.7.1 માટે છે — અધિકૃત .sha256 ચકાસણી પાસ થઈ છે."
fi

echo ""
echo "✓ સફળ: ${OUT_DIR}/${APK_NAME}"
echo ""
echo "ટેબલેટ (Android 6.0) પર ઇન્સ્ટોલ કરવા:"
echo "  1) Settings → Security → 'Unknown sources' ચાલુ કરો (ફક્ત આ એક વાર)."
echo "  2) APK ને USB/Bluetooth થી ટેબલેટમાં મૂકીને ફાઇલ પર ટેપ કરો,"
echo "     અથવા PC પરથી:  adb install \"${OUT_DIR}/${APK_NAME}\""
echo "  3) ઇન્સ્ટોલ પછી 'Unknown sources' ફરી બંધ કરી શકો છો."
echo "     (નોંધ: Play Store / F-Droid બિલ્ડ અલગ signature ધરાવે છે — બદલતાં"
echo "      પહેલાં જૂની ઇન્સ્ટોલેશન uninstall કરવી પડે છે.)"
