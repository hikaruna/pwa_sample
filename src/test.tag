test
  h3 {test}

  script.
    var type = 'JavaScript'
    this.test = `This is ${type}`

    this.myWait = async (delay) => {
      return new Promise(resolve => {
        setTimeout(() => resolve(), delay);
      });
    }

    this.hoge = async () => {
      console.log("hoge started.")
      await this.myWait(4000)
      this.test = "a"
      console.log("hoge stopped.")
    }

    this.hoge()