import "../styles/globals.css"
import "../styles/dark.css"
import "../styles/ionic"

import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
import { JSX as LocalJSX } from '@ionic/core'
import { JSX as IoniconsJSX } from 'ionicons'
import { HTMLAttributes, MutableRefObject, ReactText, useEffect } from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import toggleDarkMode from "../utils/Theme";

type ToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
    key?: ReactText;
    ref?: MutableRefObject<any>
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements> { }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter()

  useEffect(() => {
    ionDefineCustomElements(window)

    let isDark = true

    if (typeof query === "string" && query === "light") {
      isDark = false

      return
    }

    toggleDarkMode(document, isDark)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ion-app>
      <Component {...pageProps} />
    </ion-app>
  )
}

export default MyApp
