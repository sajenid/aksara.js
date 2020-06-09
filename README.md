<h2 align="center">
  <p align="center"><i>aksara.js</i></p>
  <!--
  <p align="center"><img src="" width="80%" alt="aksarajs"></p>
  -->
</h2>

Pustaka untuk alih bahasa (*transliterate*) dari Latin ke Aksara Jawa dan sebaliknya dari Aksara Jawa ke Latin.

> Source code dari pustaka ini berdasarkan projek mengagumkan dari [Transliterasi Jawa](https://bennylin.github.com/transliterasijawa)

Tujuan dibuatnya pustaka ini transliterator supaya bisa lebih mudah untuk digunakan oleh pengembang lain dalam membuat aplikasi-aplikasi yang berhubungan dengan alih bahasa Aksara Jawa.

## API

Alih bahasa dari Latin ke Aksara Jawa.

```javascript
LatinKeAksara(latin_string)
```

Aliases

```javascript
LatinToAksara(latin_string)
```

```javascript
DoTransliterate(latin_string)
```

## Pemakaian

```javascript
import { LatinKeAksara } from 'aksara'

let wada = LatinKeAksara('Nulisa Aksara Jawa');

console.log(wada); // ꦤꦸꦭꦶꦱ​ꦄꦏ꧀ꦱꦫ​ꦗꦮ
```

---
MIT © 2020, Equan Pr.
