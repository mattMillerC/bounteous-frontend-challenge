// importing SASS index file
import '../../styles/index.scss';
// importing JS files
import '../../js/index';

// importing static images
import bannerImg from '../../dist/img/coverbanner.png';
import profileImg from '../../dist/img/profileimage.png';

export default { title: 'Tile' };

export const textAndImage = () => `
  <section class="tile" auto-init="tile">
    <img class="tile__image" src="${bannerImg}"/>
    <div class="tile__content">
      <img class="tile__logo" src="${profileImg}"/>
      <button class="button tile__button">Follow</button>
      <div class="tile__content-inner flow">
        <h2 class="tile__header">Bounteous</h2>
        <p class="tile__text">Content, Commerce, and Coffee &ndash; <a href="http://bounteous.com/">#AEM/CQ5</a>, <a href="http://bounteous.com/">#Drupla</a>, <a href="http://bounteous.com/">#Magneto</a>, and <a href="http://bounteous.com/">#UXDesign</a></p>
        <aside class="tile__footer">North America & Europe &bull; bounteous.com &bull; Joined March 2009</aside>
      </div>
    </div>
  </section>`;

export const noTextWithImage = () => `
  <section class="tile" auto-init="tile">
    <img class="tile__image" src="${bannerImg}"/>
    <div class="tile__content">
      <img class="tile__logo" src="${profileImg}"/>
      <button class="button tile__button">Follow</button>
    </div>
  </section>`;

export const withTextNoImage = () => `
  <section class="tile" auto-init="tile">
    <div class="tile__content">
      <img class="tile__logo" src="${profileImg}"/>
      <button class="button tile__button">Follow</button>
      <div class="tile__content-inner flow">
        <h2 class="tile__header">Bounteous</h2>
        <p class="tile__text">Content, Commerce, and Coffee &ndash; <a href="http://bounteous.com/">#AEM/CQ5</a>, <a href="http://bounteous.com/">#Drupla</a>, <a href="http://bounteous.com/">#Magneto</a>, and <a href="http://bounteous.com/">#UXDesign</a></p>
        <aside class="tile__footer">North America & Europe &bull; bounteous.com &bull; Joined March 2009</aside>
      </div>
    </div>
  </section>
  `;
  
export const noProfileImage = () => `
  <section class="tile" auto-init="tile">
    <img class="tile__image" src="${bannerImg}"/>
    <div class="tile__content">
      <button class="button tile__button">Follow</button>
      <div class="tile__content-inner flow">
        <h2 class="tile__header">Bounteous</h2>
        <p class="tile__text">Content, Commerce, and Coffee &ndash; <a href="http://bounteous.com/">#AEM/CQ5</a>, <a href="http://bounteous.com/">#Drupla</a>, <a href="http://bounteous.com/">#Magneto</a>, and <a href="http://bounteous.com/">#UXDesign</a></p>
        <aside class="tile__footer">North America & Europe &bull; bounteous.com &bull; Joined March 2009</aside>
      </div>
    </div>
  </section>`;
  
export const extraText = () => `
  <section class="tile" auto-init="tile">
    <img class="tile__image" src="${bannerImg}"/>
    <div class="tile__content">
      <img class="tile__logo" src="${profileImg}"/>
      <button class="button tile__button">Follow</button>
      <div class="tile__content-inner flow">
        <h2 class="tile__header">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p class="tile__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <aside class="tile__footer">Lobortis feugiat vivamus at augue eget arcu. Egestas sed sed risus pretium quam vulputate dignissim suspendisse.</aside>
      </div>
    </div>
  </section>`;
  
export const bannerImageTooSmall = () => `
  <section class="tile" auto-init="tile">
    <img class="tile__image" src="http://dummyimage.com/30x40/494ca0/ffffff"/>
    <div class="tile__content">
      <img class="tile__logo" src="${profileImg}"/>
      <button class="button tile__button">Follow</button>
      <div class="tile__content-inner flow">
        <h2 class="tile__header">Bounteous</h2>
        <p class="tile__text">Content, Commerce, and Coffee &ndash; <a href="http://bounteous.com/">#AEM/CQ5</a>, <a href="http://bounteous.com/">#Drupla</a>, <a href="http://bounteous.com/">#Magneto</a>, and <a href="http://bounteous.com/">#UXDesign</a></p>
        <aside class="tile__footer">North America & Europe &bull; bounteous.com &bull; Joined March 2009</aside>
      </div>
    </div>
  </section>`;
  
  export const bannerImageTooBig = () => `
    <section class="tile" auto-init="tile">
      <img class="tile__image" src="http://dummyimage.com/3000x4000/494ca0/ffffff"/>
      <div class="tile__content">
        <img class="tile__logo" src="${profileImg}"/>
        <button class="button tile__button">Follow</button>
        <div class="tile__content-inner flow">
          <h2 class="tile__header">Bounteous</h2>
          <p class="tile__text">Content, Commerce, and Coffee &ndash; <a href="http://bounteous.com/">#AEM/CQ5</a>, <a href="http://bounteous.com/">#Drupla</a>, <a href="http://bounteous.com/">#Magneto</a>, and <a href="http://bounteous.com/">#UXDesign</a></p>
          <aside class="tile__footer">North America & Europe &bull; bounteous.com &bull; Joined March 2009</aside>
        </div>
      </div>
    </section>`;