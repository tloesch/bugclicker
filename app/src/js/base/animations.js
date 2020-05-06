class animator {

  constructor(id, frames) {
    this.id = id; //@STRING id name of dom element
    this.element = document.querySelector("#" + id); // @OBJECT dom element 
    this.frames = frames; // @ARRAY array of all animation frames
    this.animation_length = frames.length; // @INT amount of frames
    this.current_frame = 0; // @INT array key of current animation frame
  }

  next_frame() {
    // check if animation is at the end
    if((this.current_frame + 1) < this.animation_length) {
      this.current_frame += 1;
    }else{
      this.current_frame = 0;

    }
    // set next animation frame
    this.element.innerHTML = this.frames[this.current_frame];
  }

  prev_frame() {
    // check if animation is at start
    if((this.current_frame - 1) >= 0) {
      this.current_frame -= 1;
    }else{
      this.current_frame = (this.animation_length - 1);
    }
    // set previous animation frame
    this.element.innerHTML = this.frames[this.current_frame];
  }

}
//var test_frames = ["o o","O O","0 0","- -","u u","o o"];
//var test_animation = new animator('test_anim', test_frames);
