<template>
  <div class="text-editor">
    <ul class="text-editor__panel">
      <li>
        <v-btn @click="bold()"
          fab
          small
          flat
          type="button">
          <v-icon>
            format_bold
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="italic()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            format_italic
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="underline()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            format_underline
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="orderedList()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            format_list_numbered
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="unOrderedList()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            format_list_bulleted
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="clear()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            brush
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="undo()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            arrow_back
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-btn @click="redo()"
          type="button"
          fab
          small
          flat>
          <v-icon>
            arrow_forward
          </v-icon>
        </v-btn>
      </li>
      <li>
        <v-menu offset-y left>
        <v-btn slot="activator"
          fab
          small
          flat>
          <v-icon>
            mood
          </v-icon>
        </v-btn>
        <div class="emoticons-dropdown">
          <div class="emoticons-dropdown__emojis">
              <v-btn @click="emoji('smiling')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/smiling.png" alt="Emoji angry"></v-btn>
              <v-btn @click="emoji('confused')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/confused.png" alt="Emoji confused"></v-btn>
              <v-btn @click="emoji('confused-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/confused-1.png" alt="Emoji confused-1"></v-btn>
              <v-btn @click="emoji('sad')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/sad.png" alt="Emoji sad"></v-btn>
              <v-btn @click="emoji('happy')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/happy.png" alt="Emoji happy"></v-btn>
              <v-btn @click="emoji('happy-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/happy-1.png" alt="Emoji happy-1"></v-btn>
              <v-btn @click="emoji('happy-2')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/happy-2.png" alt="Emoji happy-2"></v-btn>
              <v-btn @click="emoji('happy-3')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/happy-3.png" alt="Emoji happy-3"></v-btn>
              <v-btn @click="emoji('happy-4')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/happy-4.png" alt="Emoji happy-4"></v-btn>
              <v-btn @click="emoji('wink')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/wink.png" alt="Emoji wink"></v-btn>
              <v-btn @click="emoji('kissing')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/kissing.png" alt="Emoji kissing"></v-btn>
              <v-btn @click="emoji('in-love')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/in-love.png" alt="Emoji in-love"></v-btn>
              <v-btn @click="emoji('tongue-out')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/tongue-out.png" alt="Emoji tongue-out"></v-btn>
              <v-btn @click="emoji('tongue-out-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/tongue-out-1.png" alt="Emoji tongue-out-1"></v-btn>
              <v-btn @click="emoji('smart')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/smart.png" alt="Emoji smart"></v-btn>
              <v-btn @click="emoji('angry')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/angry.png" alt="Emoji angry"></v-btn>
              <v-btn @click="emoji('angry-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/angry-1.png" alt="Emoji angry-1"></v-btn>
              <v-btn @click="emoji('mad')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/mad.png" alt="Emoji mad"></v-btn>
              <v-btn @click="emoji('unhappy')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/unhappy.png" alt="Emoji unhappy"></v-btn>
              <v-btn @click="emoji('emoticons')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/emoticons.png" alt="Emoji emoticons"></v-btn>
              <v-btn @click="emoji('embarrassed')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/embarrassed.png" alt="Emoji embarrassed"></v-btn>
              <v-btn @click="emoji('crying')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/crying.png" alt="Emoji crying"></v-btn>
              <v-btn @click="emoji('crying-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/crying-1.png" alt="Emoji crying-1"></v-btn>
              <v-btn @click="emoji('suspicious')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/suspicious.png" alt="Emoji suspicious"></v-btn>
              <v-btn @click="emoji('suspicious-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/suspicious-1.png" alt="Emoji suspicious-1"></v-btn>
              <v-btn @click="emoji('bored')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/bored.png" alt="Emoji bored"></v-btn>
              <v-btn @click="emoji('bored-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/bored-1.png" alt="Emoji bored-1"></v-btn>
              <v-btn @click="emoji('bored-2')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/bored-2.png" alt="Emoji bored-2"></v-btn>
              <v-btn @click="emoji('surprised')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/surprised.png" alt="Emoji surprised"></v-btn>
              <v-btn @click="emoji('surprised-1')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/surprised-1.png" alt="Emoji surprised-1"></v-btn>
              <v-btn @click="emoji('secret')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/secret.png" alt="Emoji secret"></v-btn>
              <v-btn @click="emoji('quiet')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/quiet.png" alt="Emoji quiet"></v-btn>
              <v-btn @click="emoji('ill')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/ill.png" alt="Emoji ill"></v-btn>
              <v-btn @click="emoji('nerd')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/nerd.png" alt="Emoji nerd"></v-btn>
              <v-btn @click="emoji('ninja')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/ninja.png" alt="Emoji ninja"></v-btn>
              <v-btn @click="emoji('happy')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/happy.png" alt="Emoji happy"></v-btn>
              <v-btn @click="emoji('poop')" fab  type="button"><img src="http://localhost:3000/images/emoji/png/poop.png" alt="Emoji poop"></v-btn>
          </div>
        </div>
        </v-menu>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    emoji (name) {
      document.getElementById('customTextareaContenteditable').focus()
      let path = `<img class="my-icons" src="http://localhost:3000/images/emoji/png/${name}.png" alt="Emoji ${name}">`
      document.execCommand('insertHTML', false, path)
    },
    undo () {
      document.execCommand('undo', false, null)
    },
    redo () {
      document.execCommand('redo', false, null)
    },
    bold () {
      document.execCommand('bold', false, null)
    },
    italic () {
      document.execCommand('italic', false, null)
    },
    underline () {
      document.execCommand('underline', false, null)
    },
    orderedList () {
      document.execCommand('insertorderedlist', false, null)
    },
    unOrderedList () {
      document.execCommand('insertunorderedlist', false, null)
    },
    clear () {
      document.execCommand('removeFormat', false, null)
    }
  }
}
</script>

<style lang="scss">
.text-editor{
  &__panel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    margin-bottom: -15px;
    .v-btn{
      margin: 0;
    }
  }
}
.emoticons-dropdown{
  margin: 0;
  padding: 5px;
  max-width: 400px;
  background-color: #fff;
  &__emojis{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  a, .v-btn{
    width: 42px;
    height: 42px;
    margin: 3px;
    cursor: pointer;
    position: relative;
    padding: 0;
    border: none;
    &:hover{
      background: transparent;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.1);
        border-radius: 50%;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
