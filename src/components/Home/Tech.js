import IconJs from '../../public/icon-js.png'
import IconPython from '../../public/icon-python.png'
import IconCpp from '../../public/icon-cpp.png';
import IconGit from '../../public/icon-git.png';
import IconGitHub from '../../public/icon-github.png';
import IconBitbucket from '../../public/icon-bitbucket.png';
import IconLinux from '../../public/icon-linux.png';
import IconNodeJS from '../../public/icon-nodejs.png';
import IconExpressJS from '../../public/icon-express.png';
import IconFlask from '../../public/icon-flask.png';
import IconMongoDB from '../../public/icon-mongodb.png';
import IconReactJS from '../../public/icon-react.png';
import IconRedux from '../../public/icon-redux.png';
import IconNextJS from '../../public/icon-nextjs.png';
import IconAngular from '../../public/icon-angular.png';
import IconHTML from '../../public/icon-html.png';
import IconCSS from '../../public/icon-css.png';
import IconSass from '../../public/icon-sass.png';
import IconBootstrap from '../../public/icon-bootstrap.png';
import IconMaterialUI from '../../public/icon-materialui.png';
import IconTailwindCSS from '../../public/icon-tailwind.png';
import IconSelenium from '../../public/icon-selenium.png';
import IconVSCode from '../../public/icon-vscode.png';
import IconXD from '../../public/icon-xd.png';
import IconFigma from '../../public/icon-figma.png';
import IconPhotoshop from '../../public/icon-ps.png';

const stacks = [
    { name: "javascript", icon: IconJs, isFav: true },
    { name: "python", icon: IconPython, isFav: true },
    { name: "cpp", icon: IconCpp, isFav: false },
    { name: "git", icon: IconGit, isFav: true },
    { name: "github", icon: IconGitHub, isFav: true },
    { name: "bitbucket", icon: IconBitbucket, isFav: false },
    { name: "linux", icon: IconLinux, isFav: false },
    { name: "nodejs", icon: IconNodeJS, isFav: true },
    { name: "expressjs", icon: IconExpressJS, isFav: true },
    { name: "flask", icon: IconFlask, isFav: false },
    { name: "mongodb", icon: IconMongoDB, isFav: true },
    { name: "react js", icon: IconReactJS, isFav: true },
    { name: "redux", icon: IconRedux, isFav: true },
    { name: "nextjs", icon: IconNextJS, isFav: false },
    { name: "angular", icon: IconAngular, isFav: false },
    { name: "html", icon: IconHTML, isFav: true },
    { name: "css", icon: IconCSS, isFav: true },
    { name: "sass", icon: IconSass, isFav: false },
    { name: "bootstrap", icon: IconBootstrap },
    { name: "material ui", icon: IconMaterialUI },
    { name: "tailwind css", icon: IconTailwindCSS },
    { name: "selenium", icon: IconSelenium, isFav: false },
    { name: "vscode", icon: IconVSCode, isFav: true },
    { name: "xd", icon: IconXD, isFav: true },
    { name: "figma", icon: IconFigma, isFav: false },
    { name: "photoshop", icon: IconPhotoshop, isFav: false },
];

const Tech = () => {
    return (
        <section className="container techContainer">
            <h1 className="header techContainer__header">Tech I have worked with</h1>
            <div className="techContainer__socialHandles">
                {stacks.map((e, k) => {
                    return (
                        <span data-text={e.name} className={`techContainer__socialHandles__tooltip ${e.isFav ? "icon_fav" : null}`} key={k}>
                            <span><img src={e.icon} height={20} width={20} /></span>
                        </span>
                    )
                })}
            </div>
        </section>
    )
}

export default Tech