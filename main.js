/**
 * ==========================================================================
 * SOUTHAURA — Main JavaScript
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. Product Data
   ========================================================================== */
const products = {
    'broken-heart-blue': {
        id: 'broken-heart-blue',
        name: 'Broken Heart Tee',
        ref: 'II-B',
        price: 45.00,
        color: 'Royal Blue',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Front: F*** Cupid Embroidery',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            './assets/img/camiseta-broken-heart-azul-frontal.webp',
            './assets/img/camiseta-broken-heart-azul-espalda.webp',
            './assets/img/camiseta-broken-heart-azul-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/BROKEN_HEART_BLUE_S',
            'M': 'https://buy.stripe.com/BROKEN_HEART_BLUE_M',
            'L': 'https://buy.stripe.com/BROKEN_HEART_BLUE_L',
            'XL': 'https://buy.stripe.com/BROKEN_HEART_BLUE_XL',
            'XXL': 'https://buy.stripe.com/BROKEN_HEART_BLUE_XXL'
        }
    },
    'case-of-yes-white': {
        id: 'case-of-yes-white',
        name: 'Case of Yes Tee',
        ref: 'II-W',
        price: 45.00,
        color: 'Bone White',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Front: F*** Cupid Embroidery',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            './assets/img/camiseta-case-of-yes-blanca-frontal.webp',
            './assets/img/camiseta-case-of-yes-blanca-espalda.webp',
            './assets/img/camiseta-case-of-yes-blanca-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/CASE_YES_WHITE_S',
            'M': 'https://buy.stripe.com/CASE_YES_WHITE_M',
            'L': 'https://buy.stripe.com/CASE_YES_WHITE_L',
            'XL': 'https://buy.stripe.com/CASE_YES_WHITE_XL',
            'XXL': 'https://buy.stripe.com/CASE_YES_WHITE_XXL'
        }
    },
    'original-black': {
        id: 'original-black',
        name: 'Original Tee Black',
        ref: 'OG-B',
        price: 40.00,
        color: 'Black',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Iberian Essence',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            './assets/img/camiseta-original-negra-frontal.webp',
            './assets/img/camiseta-original-negra-espalda.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/ORIGINAL_BLACK_S',
            'M': 'https://buy.stripe.com/ORIGINAL_BLACK_M',
            'L': 'https://buy.stripe.com/ORIGINAL_BLACK_L',
            'XL': 'https://buy.stripe.com/ORIGINAL_BLACK_XL',
            'XXL': 'https://buy.stripe.com/ORIGINAL_BLACK_XXL'
        }
    },
    'original-white': {
        id: 'original-white',
        name: 'Original Tee White',
        ref: 'OG-W',
        price: 40.00,
        color: 'White',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Iberian Essence',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            './assets/img/camiseta-original-blanca-frontal.webp',
            './assets/img/camiseta-original-blanca-espalda.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/ORIGINAL_WHITE_S',
            'M': 'https://buy.stripe.com/ORIGINAL_WHITE_M',
            'L': 'https://buy.stripe.com/ORIGINAL_WHITE_L',
            'XL': 'https://buy.stripe.com/ORIGINAL_WHITE_XL',
            'XXL': 'https://buy.stripe.com/ORIGINAL_WHITE_XXL'
        }
    },
    'grx-navy': {
        id: 'grx-navy',
        name: 'GRX Tee',
        ref: 'GRX',
        price: 45.00,
        color: 'Navy Blue',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Edition: Granada',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            './assets/img/camiseta-grx-granada-azul-marino-frontal.webp',
            './assets/img/camiseta-grx-granada-azul-marino-espalda.webp',
            './assets/img/camiseta-grx-granada-azul-marino-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/GRX_NAVY_S',
            'M': 'https://buy.stripe.com/GRX_NAVY_M',
            'L': 'https://buy.stripe.com/GRX_NAVY_L',
            'XL': 'https://buy.stripe.com/GRX_NAVY_XL',
            'XXL': 'https://buy.stripe.com/GRX_NAVY_XXL'
        }
    },
    '28f-andalucia': {
        id: '28f-andalucia',
        name: '28F Edition Tee',
        ref: '28F',
        price: 45.00,
        color: 'White / Green',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Edition: Día de Andalucía',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            './assets/img/camiseta-28f-dia-andalucia-blanca-verde-frontal.webp',
            './assets/img/camiseta-28f-dia-andalucia-blanca-verde-espalda.webp',
            './assets/img/camiseta-28f-dia-andalucia-blanca-verde-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/28F_ANDALUCIA_S',
            'M': 'https://buy.stripe.com/28F_ANDALUCIA_M',
            'L': 'https://buy.stripe.com/28F_ANDALUCIA_L',
            'XL': 'https://buy.stripe.com/28F_ANDALUCIA_XL',
            'XXL': 'https://buy.stripe.com/28F_ANDALUCIA_XXL'
        }
    }
};

/* ==========================================================================
   2. State Management
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('southaura_cart')) || [];
let currentProductId = null;
let selectedSize = null;
let lastScrollY = 0;
let headerVisible = true;

/* ==========================================================================
   3. DOM References
   ========================================================================== */
const DOM = {};

function cacheDOMElements() {
    DOM.header = document.getElementById('main-header');
    DOM.cartSidebar = document.getElementById('cart-sidebar');
    DOM.cartOverlay = document.getElementById('cart-overlay');
    DOM.cartItems = document.getElementById('cart-items');
    DOM.cartTotal = document.getElementById('cart-total');
    DOM.cartCount = document.getElementById('cart-count');
    DOM.cartCountMobile = document.getElementById('cart-count-mobile');
    DOM.cookieBanner = document.getElementById('cookie-banner');
    DOM.mobileMenu = document.getElementById('mobile-menu');
    DOM.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    DOM.newsletterForm = document.getElementById('newsletter-form');
    DOM.productModal = document.getElementById('product-modal');
    DOM.productModalSlider = document.getElementById('product-modal-slider');
    DOM.productModalDots = document.getElementById('product-modal-dots');
    DOM.productModalTitle = document.getElementById('product-modal-title');
    DOM.productModalPrice = document.getElementById('product-modal-price');
    DOM.productModalSizes = document.getElementById('product-modal-sizes');
    DOM.productModalAddCart = document.getElementById('product-modal-add-cart');
    DOM.productModalBuyNow = document.getElementById('product-modal-buy-now');
    DOM.sizeError = document.getElementById('size-error');
}

/* ==========================================================================
   4. Header & Navigation
   ========================================================================== */
function handleHeaderScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (headerVisible) {
            DOM.header.classList.add('header--hidden');
            headerVisible = false;
        }
    } else {
        if (!headerVisible) {
            DOM.header.classList.remove('header--hidden');
            headerVisible = true;
        }
    }

    lastScrollY = currentScrollY;
}

/* ==========================================================================
   5. Mobile Menu
   ========================================================================== */
function toggleMobileMenu() {
    const isHidden = DOM.mobileMenu.classList.contains('hidden');

    if (isHidden) {
        DOM.mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    DOM.mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
}

/* ==========================================================================
   6. Cart Management
   ========================================================================== */
function openCart() {
    DOM.cartSidebar.classList.add('open');
    DOM.cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    DOM.cartSidebar.classList.remove('open');
    DOM.cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

function addToCart(productId, size) {
    const product = products[productId];
    if (!product) return;

    const existingItem = cart.find(
        function(item) { return item.id === productId && item.size === size; }
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            size: size,
            image: product.images[0],
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    renderCart();
    openCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCart();
}

function saveCart() {
    localStorage.setItem('southaura_cart', JSON.stringify(cart));
}

function updateCartCount() {
    var totalItems = cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);

    if (DOM.cartCount) {
        DOM.cartCount.textContent = totalItems;
    }
    if (DOM.cartCountMobile) {
        DOM.cartCountMobile.textContent = totalItems;
    }
}

// ESTA FUNCIÓN ESTÁ CORREGIDA CON ETIQUETAS HTML REALES
function renderCart() {
    if (!DOM.cartItems) return;

    if (cart.length === 0) {
        DOM.cartItems.innerHTML = '<p class="cart-sidebar__empty">Tu cesta está vacía</p>';
        if (DOM.cartTotal) DOM.cartTotal.textContent = '€0.00';
        return;
    }

    var html = '';
    var total = 0;

    cart.forEach(function(item, index) {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item__image">
                <div class="cart-item__info">
                    <h4 class="cart-item__name">${item.name}</h4>
                    <p class="cart-item__size">Talla: ${item.size} · Qty: ${item.quantity}</p>
                    <p class="cart-item__price">${(item.price * item.quantity).toFixed(2)} €</p>
                    <button class="cart-item__remove" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            </div>
        `;
    });

    DOM.cartItems.innerHTML = html;
    if (DOM.cartTotal) DOM.cartTotal.textContent = total.toFixed(2) + ' €';
}

function checkout() {
    if (cart.length === 0) return;

    // ADVERTENCIA AÑADIDA PARA CUANDO EL CARRITO TIENE VARIAS COSAS DISTINTAS
    if (cart.length > 1) {
        alert('Por el momento, el pago rápido solo procesa un artículo a la vez. Por favor, realiza compras separadas para cada producto.');
        return;
    }

    var firstItem = cart[0];
    var product = products[firstItem.id];

    if (product && product.stripeLinks && product.stripeLinks[firstItem.size]) {
        window.location.href = product.stripeLinks[firstItem.size];
    } else {
        alert('Error al procesar el pago. Por favor, inténtalo de nuevo.');
    }
}

/* ==========================================================================
   7. Product Modal
   ========================================================================== */
function openProductModal(productId) {
    var product = products[productId];
    if (!product) return;

    currentProductId = productId;
    selectedSize = null;

    // Set title and price
    if (DOM.productModalTitle) DOM.productModalTitle.textContent = product.name;
    if (DOM.productModalPrice) DOM.productModalPrice.textContent = product.price.toFixed(2) + ' €';

    // ESTO ESTÁ CORREGIDO CON ETIQUETAS HTML REALES
    var sliderHtml = '';
    var dotsHtml = '';

    product.images.forEach(function(img, index) {
        var activeClass = index === 0 ? 'active' : '';
        sliderHtml += `<img src="${img}" class="${activeClass}" alt="Imagen ${index + 1} de ${product.name}">`;
        dotsHtml += `<span class="${activeClass}" onclick="goToProductSlide(${index})"></span>`;
    });

    if (DOM.productModalSlider) DOM.productModalSlider.innerHTML = sliderHtml;
    if (DOM.productModalDots) DOM.productModalDots.innerHTML = dotsHtml;

    // Render sizes CON HTML REAL Y EVENTO DE CLIC
    var sizesHtml = '';
    product.sizes.forEach(function(size) {
        sizesHtml += `<button class="product-detail__size-btn" onclick="selectSize('${size}')">${size}</button>`;
    });
    if (DOM.productModalSizes) DOM.productModalSizes.innerHTML = sizesHtml;

    // Hide size error
    if (DOM.sizeError) DOM.sizeError.classList.add('hidden');

    // Show modal
    if (DOM.productModal) DOM.productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function goToProductSlide(index) {
    if (!DOM.productModalSlider || !DOM.productModalDots) return;

    var images = DOM.productModalSlider.querySelectorAll('img');
    var dots = DOM.productModalDots.querySelectorAll('span');

    images.forEach(function(img, i) {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });

    dots.forEach(function(dot, i) {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function selectSize(size) {
    selectedSize = size;

    if (DOM.productModalSizes) {
        var buttons = DOM.productModalSizes.querySelectorAll('.product-detail__size-btn');
        buttons.forEach(function(btn) {
            if (btn.textContent === size) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    if (DOM.sizeError) DOM.sizeError.classList.add('hidden');
}

function handleModalAddToCart() {
    if (!selectedSize) {
        if (DOM.sizeError) DOM.sizeError.classList.remove('hidden');
        return;
    }

    addToCart(currentProductId, selectedSize);
    closeModal('product-modal');
}

function handleModalBuyNow() {
    if (!selectedSize) {
        if (DOM.sizeError) DOM.sizeError.classList.remove('hidden');
        return;
    }

    var product = products[currentProductId];
    if (product && product.stripeLinks && product.stripeLinks[selectedSize]) {
        window.location.href = product.stripeLinks[selectedSize];
    }
}

/* ==========================================================================
   8. Image Sliders (Product Cards)
   ========================================================================== */
function initProductCardSliders() {
    var cards = document.querySelectorAll('.product-card__gallery');

    cards.forEach(function(gallery) {
        var prevBtn = gallery.querySelector('.product-card__nav-btn--prev');
        var nextBtn = gallery.querySelector('.product-card__nav-btn--next');
        var images = gallery.querySelectorAll('.product-card__image');
        var dots = gallery.querySelectorAll('.product-card__dot');
        var currentIndex = 0;
        var totalImages = images.length;

        function goToSlide(index) {
            if (index < 0) index = totalImages - 1;
            if (index >= totalImages) index = 0;

            images.forEach(function(img, i) {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });

            dots.forEach(function(dot, i) {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            currentIndex = index;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                goToSlide(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                goToSlide(currentIndex + 1);
            });
        }

        // Touch/swipe support
        var touchStartX = 0;
        var touchEndX = 0;

        gallery.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        gallery.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            var diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(currentIndex - 1);
                }
            }
        }, { passive: true });
    });
}

/* ==========================================================================
   9. Modals (Generic)
   ========================================================================== */
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

/* ==========================================================================
   10. Cookie Management
   ========================================================================== */
function initCookieBanner() {
    var cookieConsent = localStorage.getItem('southaura_cookie_consent');
    if (!cookieConsent && DOM.cookieBanner) {
        DOM.cookieBanner.classList.remove('hidden');
    }
}

function acceptCookies(level) {
    localStorage.setItem('southaura_cookie_consent', level);
    if (DOM.cookieBanner) {
        DOM.cookieBanner.classList.add('hidden');
    }

    if (level === 'all') {
        // Initialize analytics cookies here if needed
        console.log('All cookies accepted');
    }
}

/* ==========================================================================
   11. Newsletter
   ========================================================================== */
function initNewsletter() {
    if (!DOM.newsletterForm) return;

    DOM.newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var emailInput = DOM.newsletterForm.querySelector('input[type="email"]');
        var email = emailInput ? emailInput.value.trim() : '';

        if (email) {
            // Here you would send the email to your backend/service
            console.log('Newsletter subscription:', email);

            // Show success feedback
            var btn = DOM.newsletterForm.querySelector('.newsletter__btn');
            if (btn) {
                btn.textContent = '¡SUSCRITO!';
                btn.style.backgroundColor = '#22c55e';
                setTimeout(function() {
                    btn.textContent = 'ENTRAR';
                    btn.style.backgroundColor = '';
                }, 3000);
            }

            if (emailInput) emailInput.value = '';
        }
    });
}

/* ==========================================================================
   12. Scroll Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
    var sections = document.querySelectorAll('.section');

    if (!('IntersectionObserver' in window)) {
        // Fallback: show all sections
        sections.forEach(function(section) {
            section.classList.add('visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(function(section) {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

/* ==========================================================================
   13. Event Listeners
   ========================================================================== */
function bindEventListeners() {
    // Scroll handler for header
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Mobile menu toggle
    if (DOM.mobileMenuToggle) {
        DOM.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Product modal buttons
    if (DOM.productModalAddCart) {
        DOM.productModalAddCart.addEventListener('click', handleModalAddToCart);
    }
    if (DOM.productModalBuyNow) {
        DOM.productModalBuyNow.addEventListener('click', handleModalBuyNow);
    }

    // Close modals on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modal
            var modals = document.querySelectorAll('.modal:not(.hidden)');
            modals.forEach(function(modal) {
                modal.classList.add('hidden');
            });

            // Close cart
            closeCart();

            // Close mobile menu
            closeMobileMenu();

            // Restore scroll
            document.body.style.overflow = '';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                var headerOffset = 80;
                var elementPosition = targetElement.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================================================
   14. Initialization
   ========================================================================== */
function init() {
    cacheDOMElements();
    bindEventListeners();
    initProductCardSliders();
    initCookieBanner();
    initNewsletter();
    initScrollAnimations();
    updateCartCount();
    renderCart();

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
