const text = `
[BOOT] Initializing LifeOS v1.0...
[INFO] Loading emotional modules...
[WARN] Dependency missing: Nicole

> Running life_without_nicole()
happiness = []
meaning = []
status = null

[ERROR] System unstable. Heart process not responding.

> Installing dependency: Nicole v∞
[OK] Package installed successfully.

> Running life_with_nicole()
happiness = ["love", "laughter", "home"]
meaning = "infinite"
status = "complete"

[STABLE] All systems operational.

while (true) {
  print("Shaun ❤️ Nicole — together forever.");
}
`;

let i = 0;
const speed = 35;
const codeElement = document.getElementById("code");

function typeWriter() {
  if (i < text.length) {
    codeElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelectorAll(".photos img").forEach(img => {
      img.style.opacity = 1;
    });
  }
}

typeWriter();