const galleries = {
    minimal: {
        images: [
            "../assets/img/minimal.jpg",
            "../assets/img/minimal.jpg",
            "../assets/img/minimal.jpg",
            "../assets/img/minimal.jpg"
        ],
        description: "Minimal nail designs with a clean and elegant finish. Perfect for a soft, classy everyday look."
    },

    medium: {
        images: [
            "../assets/img/medium-design.jpg",
            "../assets/img/medium-design.jpg",
            "../assets/img/medium-design.jpg",
            "../assets/img/medium-design.jpg"
        ],
        description:
            "Medium nail art with balanced details and style. Ideal if you want something noticeable yet elegant."
    },

    full: {
        images: [
            "../assets/img/full.jpg",
            "../assets/img/full.jpg",
            "../assets/img/full.jpg",
            "../assets/img/full.jpg"
        ],
        description: "Full nail art with detailed designs and creativity. A bold choice for statement nails."
    },

    french: {
        images: [
            "../assets/img/french1.jpg",
            "../assets/img/french2.jpg",
            "../assets/img/french3.jpg",
            "../assets/img/french4.jpg"
        ],
        description: "Classic French nails with a modern touch. Timeless, fresh and always stylish."
    },

    steentjes: {
        images: [
            "../assets/img/3steentjes.jpg",
            "../assets/img/3steentjes.jpg",
            "../assets/img/3steentjes.jpg",
            "../assets/img/3steentjes.jpg"
        ],
        description: "Luxury nail designs finished with sparkling stones. Perfect for glam and special occasions."
    },

    chrome: {
        images: [
            "../assets/img/chrome1.jpg",
            "../assets/img/chrome2.jpg",
            "../assets/img/chrome3.jpg",
            "../assets/img/chrome4.jpg"
        ],
        description: "Chrome nails with a mirror-like shine. Trendy, bold and eye-catching."
    },

    "3d": {
        images: ["../assets/img/3d.jpg", "../assets/img/3d2.jpg", "../assets/img/3d3.jpg", "../assets/img/3d4.jpg"],
        description: "3D gel designs that add texture and depth. Unique nails that truly stand out."
    },

    folie: {
        images: [
            "../assets/img/folie.jpg",
            "../assets/img/folie.jpg",
            "../assets/img/folie.jpg",
            "../assets/img/folie.jpg"
        ],
        description: "Folie nail art with shiny accents and artistic patterns. Modern and playful designs."
    }
};

// ===== ELEMENTS =====
const modal = document.getElementById("galleryModal");
const galleryImages = document.getElementById("galleryImages");
const galleryDescription = document.getElementById("galleryDescription");
const closeBtn = document.querySelector(".close-btn");

// ===== OPEN GALLERY =====
document.querySelectorAll(".open-gallery").forEach((card) => {
    card.addEventListener("click", () => {
        const type = card.dataset.gallery;
        galleryImages.innerHTML = "";
        galleryDescription.textContent = "";

        if (!galleries[type]) return;

        galleries[type].images.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `${type} nail design`;
            img.classList.add("gallery-img");
            galleryImages.appendChild(img);
        });

        galleryDescription.textContent = galleries[type].description;
        modal.style.display = "flex";
    });
});

// ===== CLOSE =====
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
navigator.clipboard.writeText("#F4C2C2");
