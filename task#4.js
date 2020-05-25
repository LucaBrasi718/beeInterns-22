const bird = ['П', 'т', 'и', 'ц', 'а'];

for (let index = 0; index < bird.length; index++) {
  setTimeout(() => {
    console.log(bird[index]);
  }, 100);
}