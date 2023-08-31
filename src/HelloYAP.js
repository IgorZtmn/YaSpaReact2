import React, { Component } from 'react';
import "./HelloYAP.css"; 
import logo from './Photo1.png';
import logo1 from './Photo2.png';
import logo2 from './football.png';
import logo3 from './wiki.png';
import logo4 from './html.png';
class HelloYAP extends Component {
  render() {
    return (
       <>
      <div className="pya">
      <h1 className="wel">Привет, <span className="ya">Я</span> Игорь!</h1>
      </div>
      <div className="main"> 
      <div className="m1">
      <div class="m2"> 
      <img className="photo1" crossorigin src={logo} alt="Я сейчас." width={230}/> <h4>Я СЕЙЧАС</h4></div>
      <div className="m3"> 
      <img className="photo2" crossorigin src={logo1} alt="Я сейчас." width={230}/> <h4>Я ТОГДА</h4></div>
     </div>
    <div className="history">
    <div class="his1">
    <div class="hh1">  <img crossorigin src={logo2} alt="Футболист" width={230}/> </div>
    <div class="hh2"><h4 className="ti">В далеком, но таком прекрасном 2007...</h4> 
    <p> я впервые завел личную страницу в одной из соц. сетей. 
    В ней была возможность вступать в группы по интересам: Новости спорта, фанаты фильмов про “Гарри Поттера” и тд.  
    У меня, как и у любого нормального паренька в этом возрасте, тоже была куча интересов один из них — это футбол.  
    Я, недолго думая, решил создать тематическую группу про одну из футбольных команд, и видел, 
    что в других подобных группах есть оформленное меню, 
    страницы с красивыми изображениями и различные кнопки. 
    После этого, я задался вопросом, как это можно сделать самому? 
    </p> 
    </div>
    </div>
    <div class="his2">
    <div class="hh3"><h4 className="ti"> Немного посидев в интернете...</h4> <p> мне попадалась статья о “Вики-разметке” и что именно с помощью неё можно так круто оформлять группы.
    Я тут же сажусь за изучение тэгов, попутно смотрю уроки по фотошопу, чтобы моя группа была самая красивая
    Изучение “вики” длилось буквально пару недель. Я допилил свою группу и получилась она настолько красивая и цепляющая, в плане разметки и дизайна, что после этого полетели заказы по оформлению других групп.
    </p>  
    </div>
    <div class="hh4"> <img crossorigin src={logo3} alt="Wiki" width={300}/>
    </div>
    </div>
    <div class="his3">
    <div class="hh5">  <img crossorigin src={logo4} alt="html" width={300}/> </div>
    <div class="hh6"><h4 className="ti">В процессе работы...</h4> <p>я обнаружил некое сходство «Вики-разметки» и HTML. Покопавшись в последней, я узнал, что с её помощью создают уже не просто группы в социальных сетях, а целые сайты. После этого, мои глаза загорелись. 
    С тех пор моя любовь к тэгам и дизайну продолжает жить во мне. 
    Спасибо за внимание! 
    </p> 
    </div>
    </div>
    </div>
    <div className="video"> 
    <div className="iv"> <h1 className="ef">Простой эффект в CSS</h1> <p className="op"> Короткий урок как добавить анимацию в CSS. <br/>Здесь мы применяем свойства transitions, transform. 
    </p> 
    </div>
    <div className="vid"><iframe className="you" width="560" height="315" src="https://www.youtube.com/embed/kwmj16CedXQ?si=v0p6jVEY2eEWwn0n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>        
    </div>
    </div>
    <div className="footer"> 
    <div className="copyr"><h5>© 2023 ИГОРЬ ЗЕЛЕНОВ</h5></div>
    </div>
 </>
      );
  }
}
 
export default HelloYAP;


