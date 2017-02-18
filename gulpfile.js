var gulp=require('gulp');
var sass=require('gulp-sass');
var browersync=require('browser-sync').create();
var reload=browersync.reload;

//启动服务
gulp.task('server',function () {
    browersync.init({
        server:{
            baseDir:'./',
            startPath:'index.html'
        }
    });
    //监听sass变化
    gulp.watch('style/*.sass',[sass]);
});
//编译sass
gulp.task("sass",function(){
    gulp.src("css/style.sass")
        .pipe(sass())
        .pipe(gulp.dest("style/"))
        .pipe(reload({stream:true}))
})



/**
 * Created by samsung on 2017/2/17.
 */
