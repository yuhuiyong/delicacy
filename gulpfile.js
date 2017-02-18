var gulp=require('gulp');
var sass=require('gulp-sass');
var browersync=require('browser-sync').create();
var reload=browersync.reload;

//��������
gulp.task('server',function () {
    browersync.init({
        server:{
            baseDir:'./',
            startPath:'index.html'
        }
    });
    //����sass�仯
    gulp.watch('style/*.sass',[sass]);
});
//����sass
gulp.task("sass",function(){
    gulp.src("css/style.sass")
        .pipe(sass())
        .pipe(gulp.dest("style/"))
        .pipe(reload({stream:true}))
})



/**
 * Created by samsung on 2017/2/17.
 */
