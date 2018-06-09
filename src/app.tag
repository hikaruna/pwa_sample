<app>
  <h2>{ opts.title }</h2>
  <p>{ count }</p>
  <button onclick="{ show_count }">click</button>
  <button onclick="{ alertDelayed }">alert</button>
  
  <script>
    self = this
    this.count = 0
  
    show_count() {
      this.count += 1
    }

    sleep(delay) {
      return new Promise(resolve => {
        setTimeout(() => (resolve()), delay)
      })
    }

    async alertDelayed() {
      console.log("alert awaik")
      await this.sleep(3000)
      alert('alert')
      this.count += 10
      this.update()
      console.log("alert awaiked")
    }
  </script>
</app>