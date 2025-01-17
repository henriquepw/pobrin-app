"use client"
import { vars } from "nativewind"

function getAccentColor(theme: "light" | "dark", color: string) {
  if (theme === "light") {
    return {
      [`--color-${color}-50`]: "240 253 250",
      [`--color-${color}-100`]: "204 251 241",
      [`--color-${color}-200`]: "153 246 228",
      [`--color-${color}-300`]: "94 234 212",
      [`--color-${color}-400`]: "45 212 191",
      [`--color-${color}-500`]: "20 184 166",
      [`--color-${color}-600`]: "13 148 136",
      [`--color-${color}-700`]: "15 118 110",
      [`--color-${color}-800`]: "17 94 89",
      [`--color-${color}-900`]: "19 78 74",
      [`--color-${color}-950`]: "4 47 46",
    } as const
  }

  return {
    [`--color-${color}-50`]: "4 47 46",
    [`--color-${color}-100`]: "19 78 74",
    [`--color-${color}-200`]: "17 94 89",
    [`--color-${color}-300`]: "15 118 110",
    [`--color-${color}-400`]: "13 148 136",
    [`--color-${color}-500`]: "20 184 166",
    [`--color-${color}-600`]: "45 212 191",
    [`--color-${color}-700`]: "94 234 212",
    [`--color-${color}-800`]: "153 246 228",
    [`--color-${color}-900`]: "204 251 241",
    [`--color-${color}-950`]: "240 253 250",
  } as const
}

function getNeutralColor(theme: "light" | "dark", color: string) {
  if (theme === "light") {
    return {
      [`--color-${color}-50`]: "250 250 250",
      [`--color-${color}-100`]: "244 244 245",
      [`--color-${color}-200`]: "228 228 231",
      [`--color-${color}-300`]: "212 212 216",
      [`--color-${color}-400`]: "161 161 170",
      [`--color-${color}-500`]: "113 113 122",
      [`--color-${color}-600`]: "82 82 91",
      [`--color-${color}-700`]: "63 63 70",
      [`--color-${color}-800`]: "39 39 42",
      [`--color-${color}-900`]: "24 24 27",
      [`--color-${color}-950`]: "9 9 11",
    } as const
  }

  return {
    [`--color-${color}-50`]: "9 9 11",
    [`--color-${color}-100`]: "24 24 27",
    [`--color-${color}-200`]: "39 39 42",
    [`--color-${color}-300`]: "63 63 70",
    [`--color-${color}-400`]: "82 82 91",
    [`--color-${color}-500`]: "113 113 122",
    [`--color-${color}-600`]: "161 161 170",
    [`--color-${color}-700`]: "212 212 216",
    [`--color-${color}-800`]: "228 228 231",
    [`--color-${color}-900`]: "244 244 245",
    [`--color-${color}-950`]: "250 250 250",
  } as const
}

export const config = {
  light: vars({
    ...getNeutralColor("light", "background"),
    ...getNeutralColor("light", "typography"),
    ...getNeutralColor("light", "outline"),
    ...getNeutralColor("light", "neutral"),

    ...getAccentColor("light", "primary"),
    ...getAccentColor("light", "secondary"),
    ...getAccentColor("light", "tertiary"),

    /* Error */
    "--color-error-0": "254 233 233",
    "--color-error-50": "254 226 226",
    "--color-error-100": "254 202 202",
    "--color-error-200": "252 165 165",
    "--color-error-300": "248 113 113",
    "--color-error-400": "239 68 68",
    "--color-error-500": "230 53 53",
    "--color-error-600": "220 38 38",
    "--color-error-700": "185 28 28",
    "--color-error-800": "153 27 27",
    "--color-error-900": "127 29 29",
    "--color-error-950": "83 19 19",

    /* Success */
    "--color-success-0": "228 255 244",
    "--color-success-50": "202 255 232",
    "--color-success-100": "162 241 192",
    "--color-success-200": "132 211 162",
    "--color-success-300": "102 181 132",
    "--color-success-400": "72 151 102",
    "--color-success-500": "52 131 82",
    "--color-success-600": "42 121 72",
    "--color-success-700": "32 111 62",
    "--color-success-800": "22 101 52",
    "--color-success-900": "20 83 45",
    "--color-success-950": "27 50 36",

    /* Warning */
    "--color-warning-0": "255 249 245",
    "--color-warning-50": "255 244 236",
    "--color-warning-100": "255 231 213",
    "--color-warning-200": "254 205 170",
    "--color-warning-300": "253 173 116",
    "--color-warning-400": "251 149 75",
    "--color-warning-500": "231 120 40",
    "--color-warning-600": "215 108 31",
    "--color-warning-700": "180 90 26",
    "--color-warning-800": "130 68 23",
    "--color-warning-900": "108 56 19",
    "--color-warning-950": "84 45 18",

    /* Info */
    "--color-info-0": "236 248 254",
    "--color-info-50": "199 235 252",
    "--color-info-100": "162 221 250",
    "--color-info-200": "124 207 248",
    "--color-info-300": "87 194 246",
    "--color-info-400": "50 180 244",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",
    "--color-info-950": "3 38 56",

    /* Background Special */
    "--color-background-error": "254 241 241",
    "--color-background-warning": "255 243 234",
    "--color-background-success": "237 252 242",
    "--color-background-muted": "247 248 247",
    "--color-background-info": "235 248 254",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "55 55 55",
    "--color-indicator-info": "83 153 236",
    "--color-indicator-error": "185 28 28",
  }),
  dark: vars({
    ...getNeutralColor("dark", "background"),
    ...getNeutralColor("dark", "typography"),
    ...getNeutralColor("dark", "outline"),
    ...getNeutralColor("dark", "neutral"),

    ...getAccentColor("dark", "primary"),
    ...getAccentColor("dark", "secondary"),
    ...getAccentColor("dark", "tertiary"),

    /* Error */
    "--color-error-0": "83 19 19",
    "--color-error-50": "127 29 29",
    "--color-error-100": "153 27 27",
    "--color-error-200": "185 28 28",
    "--color-error-300": "220 38 38",
    "--color-error-400": "230 53 53",
    "--color-error-500": "239 68 68",
    "--color-error-600": "249 97 96",
    "--color-error-700": "229 91 90",
    "--color-error-800": "254 202 202",
    "--color-error-900": "254 226 226",
    "--color-error-950": "254 233 233",

    /* Success */
    "--color-success-0": "27 50 36",
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",
    "--color-success-950": "228 255 244",

    /* Warning */
    "--color-warning-0": "84 45 18",
    "--color-warning-50": "108 56 19",
    "--color-warning-100": "130 68 23",
    "--color-warning-200": "180 90 26",
    "--color-warning-300": "215 108 31",
    "--color-warning-400": "231 120 40",
    "--color-warning-500": "251 149 75",
    "--color-warning-600": "253 173 116",
    "--color-warning-700": "254 205 170",
    "--color-warning-800": "255 231 213",
    "--color-warning-900": "255 244 237",
    "--color-warning-950": "255 249 245",

    /* Info */
    "--color-info-0": "3 38 56",
    "--color-info-50": "5 64 93",
    "--color-info-100": "7 90 131",
    "--color-info-200": "9 115 168",
    "--color-info-300": "11 141 205",
    "--color-info-400": "13 166 242",
    "--color-info-500": "50 180 244",
    "--color-info-600": "87 194 246",
    "--color-info-700": "124 207 248",
    "--color-info-800": "162 221 250",
    "--color-info-900": "199 235 252",
    "--color-info-950": "236 248 254",

    /* Background Special */
    "--color-background-error": "66 43 43",
    "--color-background-warning": "65 47 35",
    "--color-background-success": "28 43 33",
    "--color-background-muted": "51 51 51",
    "--color-background-info": "26 40 46",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "247 247 247",
    "--color-indicator-info": "161 199 245",
    "--color-indicator-error": "232 70 69",
  }),
}
