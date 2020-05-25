const bird = ['П', 'т', 'и', 'ц', 'а'];

for (var index = 0; index < bird.length;) {
  setTimeout(() => {
    console.log(bird);
    console.log(index);
  }, 100);
}