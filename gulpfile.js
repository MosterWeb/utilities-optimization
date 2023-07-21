const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");

function css(done) {
  src("src/scss/app.scss").pipe(sass()).pipe(dest("build/css"));

  done();
}

function dev(done) {
    watch("src/scss/app.scss", css)
    done();
}

function convert(done){
    const config = {
        quality: 50
    }
    src("src/img/**/*.{jpg,png}")
    .pipe(webp(config))
    .pipe(dest("build/img"));
    
    done();    
}

exports.css = css;
exports.dev = dev;
exports.becomeImage = convert;
