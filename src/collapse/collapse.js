import './collapse.css';

export default class Collapse {
  constructor() {
    this.container = document.querySelector('.collapse');
    this.collapseBtn = document.querySelector('.collapse-btn');
    this.collapseMsg = document.querySelector('.collapse-msg');
    this.animationRun = false;

    this.onCollapseMouseDown = this.onCollapseMouseDown.bind(this);
    this.onCollapseMouseUp = this.onCollapseMouseUp.bind(this);
    this.onAnimationIteration = this.onAnimationIteration.bind(this);

    this.bindToDOM();

    this.heightCollapseFrom = this.container.getBoundingClientRect().height;
  }

  bindToDOM() {
    this.collapseBtn.addEventListener('mousedown', this.onCollapseMouseDown);
    document.addEventListener('mouseup', this.onCollapseMouseUp);
    this.container.addEventListener('animationiteration', this.onAnimationIteration);
  }

  onCollapseMouseDown(e) {
    e.preventDefault();

    this.collapseMsg.classList.add('visible');
    this.container.classList.add('animate');
    this.animationRun = true;

    document.documentElement.style.setProperty('--height-collapse-from', `${this.heightCollapseFrom}px`);

    const heightCollapseTo = this.heightCollapseFrom + this.collapseMsg.offsetHeight + 20;
    document.documentElement.style.setProperty('--height-collapse-to', `${heightCollapseTo}px`);
  }

  onCollapseMouseUp() {
    this.animationRun = false;
  }

  onAnimationIteration() {
    if (!this.animationRun) {
      this.collapseMsg.classList.remove('visible');
      this.container.classList.remove('animate');
    }
  }
}
