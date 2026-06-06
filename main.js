'use strict';

/* ==========================================================================
   1. Product Data
   ========================================================================== */
var products = {
    'broken-heart-blue': {
        id: 'broken-heart-blue',
        name: 'Broken Heart Tee',
        ref: 'II-B',
        price: 28.00,
        color: 'Royal Blue',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Front: F*** Cupid Embroidery',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'camiseta-broken-heart-azul-frontal.webp',
            'camiseta-broken-heart-azul-espalda.webp',
            'camiseta-broken-heart-azul-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/test_dRm3cn75Mbj79a81Da3ks06', 'M': 'https://buy.stripe.com/test_dRm3cn75Mbj79a81Da3ks06', 'L': 'https://buy.stripe.com/test_dRm3cn75Mbj79a81Da3ks06', 'XL': 'https://buy.stripe.com/test_dRm3cn75Mbj79a81Da3ks06', 'XXL': 'https://buy.stripe.com/test_dRm3cn75Mbj79a81Da3ks06'
        }
    },
    'case-of-yes-white': {
        id: 'case-of-yes-white',
        name: 'Case of Yes Tee',
        ref: 'II-W',
        price: 28.00,
        color: 'Bone White',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Front: F*** Cupid Embroidery',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'camiseta-case-of-yes-blanca-frontal.webp',
            'camiseta-case-of-yes-blanca-espalda.webp',
            'camiseta-case-of-yes-blanca-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/test_dRm5kv2Pwfzn5XWbdK3ks05', 'M': 'https://buy.stripe.com/test_dRm5kv2Pwfzn5XWbdK3ks05', 'L': 'https://buy.stripe.com/test_dRm5kv2Pwfzn5XWbdK3ks05', 'XL': 'https://buy.stripe.com/test_dRm5kv2Pwfzn5XWbdK3ks05', 'XXL': 'https://buy.stripe.com/test_dRm5kv2Pwfzn5XWbdK3ks05'
        }
    },
    'original-black': {
        id: 'original-black',
        name: 'Original Tee Black',
        ref: 'OG-B',
        price: 28.00,
        color: 'Black',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Iberian Essence',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'camiseta-original-negra-frontal.webp',
            'camiseta-original-negra-espalda.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/test_eVqbIT0Ho2MB9a82He3ks04', 'M': 'https://buy.stripe.com/test_eVqbIT0Ho2MB9a82He3ks04', 'L': 'https://buy.stripe.com/test_eVqbIT0Ho2MB9a82He3ks04', 'XL': 'https://buy.stripe.com/test_eVqbIT0Ho2MB9a82He3ks04', 'XXL': 'https://buy.stripe.com/test_eVqbIT0Ho2MB9a82He3ks04'
        }
    },
    'original-white': {
        id: 'original-white',
        name: 'Original Tee White',
        ref: 'OG-W',
        price: 28.00,
        color: 'White',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Iberian Essence',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'camiseta-original-blanca-frontal.webp',
            'camiseta-original-blanca-espalda.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/test_dRm28j2Pw1Ixfyw6Xu3ks03', 'M': 'https://buy.stripe.com/test_dRm28j2Pw1Ixfyw6Xu3ks03', 'L': 'https://buy.stripe.com/test_dRm28j2Pw1Ixfyw6Xu3ks03', 'XL': 'https://buy.stripe.com/test_dRm28j2Pw1Ixfyw6Xu3ks03', 'XXL': 'https://buy.stripe.com/test_dRm28j2Pw1Ixfyw6Xu3ks03'
        }
    },
    'grx-navy': {
        id: 'grx-navy',
        name: 'GRX Tee',
        ref: 'GRX',
        price: 28.00,
        color: 'Navy Blue',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Edition: Granada',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'camiseta-grx-granada-azul-marino-frontal.webp',
            'camiseta-grx-granada-azul-marino-espalda.webp',
            'camiseta-grx-granada-azul-marino-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/test_00wcMXbm25YN4TSchO3ks02', 'M': 'https://buy.stripe.com/test_00wcMXbm25YN4TSchO3ks02', 'L': 'https://buy.stripe.com/test_00wcMXbm25YN4TSchO3ks02', 'XL': 'https://buy.stripe.com/test_00wcMXbm25YN4TSchO3ks02', 'XXL': 'https://buy.stripe.com/test_00wcMXbm25YN4TSchO3ks02'
        }
    },
    '28f-andalucia': {
        id: '28f-andalucia',
        name: '28F Edition Tee',
        ref: '28F',
        price: 28.00,
        color: 'White / Green',
        fit: 'Oversize',
        gsm: 230,
        detail: 'Edition: Día de Andalucía',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'camiseta-28f-dia-andalucia-blanca-verde-frontal.webp',
            'camiseta-28f-dia-andalucia-blanca-verde-espalda.webp',
            'camiseta-28f-dia-andalucia-blanca-verde-detalle.webp'
        ],
        stripeLinks: {
            'S': 'https://buy.stripe.com/test_bJe8wHeye72Raeca9G3ks01', 'M': 'https://buy.stripe.com/test_bJe8wHeye72Raeca9G3ks01', 'L': 'https://buy.stripe.com/test_bJe8wHeye72Raeca9G3ks01', 'XL': 'https://buy.stripe.com/test_bJe8wHeye72Raeca9G3ks01', 'XXL': 'https://buy.stripe.com/test_bJe8wHeye72Raeca9G3ks01'
        }
    }
};

/* ==========================================================================
   2. State
   ========================================================================== */
var cart = [];
var currentProductId = null;
var selectedSize = null;
var lastScrollY = 0;
var headerVisible = true;

// Load cart from localStorage
try {
    var savedCart = localStorage.getItem('southaura_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
} catch (e) {
    cart = [];
}

/* ==========================================================================
   3. DOM References
   ========================================================================== */
var DOM = {};

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
   4. Header Scroll
   ========================================================================== */
function handleHeaderScroll() {
    var currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (headerVisible && DOM.header) {
            DOM.header.classList.add('header--hidden');
            headerVisible = false;
        }
    } else {
        if (!headerVisible && DOM.header) {
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
    if (!DOM.mobileMenu) return;
    var isHidden = DOM.mobileMenu.classList.contains('hidden');
    if (isHidden) {
        DOM.mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    if (DOM.mobileMenu) {
        DOM.mobileMenu.classList.add('hidden');
    }
    document.body.style.overflow = '';
}

/* ==========================================================================
   6. Cart
   ========================================================================== */
function openCart() {
    if (DOM.cartSidebar) DOM.cartSidebar.classList.add('open');
    if (DOM.cartOverlay) DOM.cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    if (DOM.cartSidebar) DOM.cartSidebar.classList.remove('open');
    if (DOM.cartOverlay) DOM.cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

function addToCart(productId, size) {
    var product = products[productId];
    if (!product) return;

    var existingItem = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId && cart[i].size === size) {
            existingItem = cart[i];
            break;
        }
    }

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
    try {
        localStorage.setItem('southaura_cart', JSON.stringify(cart));
    } catch (e) {}
}

function updateCartCount() {
    var totalItems = 0;
    for (var i = 0; i < cart.length; i++) {
        totalItems += cart[i].quantity;
    }
    if (DOM.cartCount) DOM.cartCount.textContent = totalItems;
    if (DOM.cartCountMobile) DOM.cartCountMobile.textContent = totalItems;
}

function renderCart() {
    if (!DOM.cartItems) return;

    if (cart.length === 0) {
        DOM.cartItems.innerHTML = 'Tu cesta está vacía';
        if (DOM.cartTotal) DOM.cartTotal.textContent = '€0.00';
        return;
    }

    var html = '';
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var product = products[item.id];
        var imageUrl = product && product.images ? 'assets/images/' + product.images[0] : 'assets/images/placeholder.webp';
        total += item.price * item.quantity;
        html += '<div class="cart-item">' +
            '<img src="' + imageUrl + '" alt="' + item.name + '" class="cart-item__image" loading="lazy">' +
            '<div class="cart-item__info">' +
            '<div class="cart-item__name">' + item.name + '</div>' +
            '<div class="cart-item__size">Talla: ' + item.size + ' · Cant: ' + item.quantity + '</div>' +
            '<div class="cart-item__price">€' + (item.price * item.quantity).toFixed(2) + '</div>' +
            '<button onclick="removeFromCart(' + i + ')" class="cart-item__remove">Eliminar</button>' +
            '</div>' +
            '</div>';
    }

    DOM.cartItems.innerHTML = html;
    if (DOM.cartTotal) DOM.cartTotal.textContent = '€' + total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) return;
    var firstItem = cart[0];
    var product = products[firstItem.id];
    if (product && product.stripeLinks && product.stripeLinks[firstItem.size]) {
        var link = product.stripeLinks[firstItem.size];
        if (link !== '#') {
            window.location.href = link;
        } else {
            alert('Los enlaces de pago se configurarán próximamente.');
        }
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

    if (DOM.productModalTitle) DOM.productModalTitle.textContent = product.name;
    if (DOM.productModalPrice) DOM.productModalPrice.textContent = product.price.toFixed(2) + ' €';

    // Render images
    var sliderHtml = '';
    var dotsHtml = '';
    for (var i = 0; i < product.images.length; i++) {
        var activeClass = (i === 0) ? 'active' : '';
        var loadingAttr = (i === 0) ? '' : 'loading="lazy"'; // Solo lazy load en imágenes no visibles
        sliderHtml += '<img src="assets/images/' + product.images[i] + '" class="product-detail__image ' + activeClass + '" ' + loadingAttr + ' alt="' + product.name + ' - Image ' + (i + 1) + '">';
        dotsHtml += '<span class="product-detail__dot ' + activeClass + '" onclick="goToProductSlide(' + i + ')"></span>';
    }
    if (DOM.productModalSlider) DOM.productModalSlider.innerHTML = sliderHtml;
    if (DOM.productModalDots) DOM.productModalDots.innerHTML = dotsHtml;

    // Render sizes
    var sizesHtml = '';
    for (var j = 0; j < product.sizes.length; j++) {
        sizesHtml += '<button class="product-detail__size-btn" onclick="selectSize(\'' + product.sizes[j] + '\')">' + product.sizes[j] + '</button>';
    }
    if (DOM.productModalSizes) DOM.productModalSizes.innerHTML = sizesHtml;

    // Hide error
    if (DOM.sizeError) DOM.sizeError.classList.add('hidden');

    // Show modal
    if (DOM.productModal) DOM.productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Re-init icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function goToProductSlide(index) {
    if (!DOM.productModalSlider || !DOM.productModalDots) return;
    var images = DOM.productModalSlider.querySelectorAll('img');
    var dots = DOM.productModalDots.querySelectorAll('span');

    for (var i = 0; i < images.length; i++) {
        if (i === index) {
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
    for (var j = 0; j < dots.length; j++) {
        if (j === index) {
            dots[j].classList.add('active');
        } else {
            dots[j].classList.remove('active');
        }
    }
}

function selectSize(size) {
    selectedSize = size;
    if (DOM.productModalSizes) {
        var buttons = DOM.productModalSizes.querySelectorAll('.product-detail__size-btn');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === size) {
                buttons[i].classList.add('active');
            } else {
                buttons[i].classList.remove('active');
            }
        }
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
        var link = product.stripeLinks[selectedSize];
        if (link !== '#') {
            window.location.href = link;
        } else {
            alert('Los enlaces de pago se configurarán próximamente.');
        }
    }
}

/* ==========================================================================
   8. Image Sliders (Product Cards)
   ========================================================================== */
function initProductCardSliders() {
    var galleries = document.querySelectorAll('.product-card__gallery');

    for (var g = 0; g < galleries.length; g++) {
        (function(gallery) {
            var prevBtn = gallery.querySelector('.product-card__nav-btn--prev');
            var nextBtn = gallery.querySelector('.product-card__nav-btn--next');
            var images = gallery.querySelectorAll('.product-card__image');
            var dots = gallery.querySelectorAll('.product-card__dot');
            var currentIndex = 0;
            var totalImages = images.length;

            function goToSlide(index) {
                if (index < 0) index = totalImages - 1;
                if (index >= totalImages) index = 0;
                for (var i = 0; i < images.length; i++) {
                    if (i === index) {
                        images[i].classList.add('active');
                    } else {
                        images[i].classList.remove('active');
                    }
                }
                for (var j = 0; j < dots.length; j++) {
                    if (j === index) {
                        dots[j].classList.add('active');
                    } else {
                        dots[j].classList.remove('active');
                    }
                }
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

            // Touch support
            var touchStartX = 0;
            gallery.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});
            gallery.addEventListener('touchend', function(e) {
                var touchEndX = e.changedTouches[0].screenX;
                var diff = touchStartX - touchEndX;
                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        goToSlide(currentIndex + 1);
                    } else {
                        goToSlide(currentIndex - 1);
                    }
                }
            }, {passive: true});
        })(galleries[g]);
    }
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
   10. Cookies
   ========================================================================== */
function initCookieBanner() {
    try {
        var consent = localStorage.getItem('southaura_cookie_consent');
        if (!consent && DOM.cookieBanner) {
            DOM.cookieBanner.classList.remove('hidden');
        }
    } catch (e) {}
}

function acceptCookies(level) {
    try {
        localStorage.setItem('southaura_cookie_consent', level);
    } catch (e) {}
    if (DOM.cookieBanner) {
        DOM.cookieBanner.classList.add('hidden');
    }
}

/* ==========================================================================
   11. Newsletter
   ========================================================================== */
function initNewsletter() {
    if (!DOM.newsletterForm) return;
    DOM.newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var input = DOM.newsletterForm.querySelector('input[type="email"]');
        var email = input ? input.value.trim() : '';
        if (email) {
            var btn = DOM.newsletterForm.querySelector('.newsletter__btn');
            if (btn) {
                btn.textContent = '¡SUSCRITO!';
                btn.style.backgroundColor = '#22c55e';
                setTimeout(function() {
                    btn.textContent = 'ENTRAR';
                    btn.style.backgroundColor = '';
                }, 3000);
            }
            if (input) input.value = '';
        }
    });
}

/* ==========================================================================
   12. Event Listeners
   ========================================================================== */
function bindEventListeners() {
    // Header scroll
    window.addEventListener('scroll', handleHeaderScroll, {passive: true});

    // Mobile menu
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

    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            var openModals = document.querySelectorAll('.modal:not(.hidden)');
            for (var i = 0; i < openModals.length; i++) {
                openModals[i].classList.add('hidden');
            }
            closeCart();
            closeMobileMenu();
            document.body.style.overflow = '';
        }
    });

    // Smooth scroll
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = 80;
                var pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({top: pos, behavior: 'smooth'});
            }
        });
    }
}

/* ==========================================================================
   13. Init
   ========================================================================== */
function init() {
    cacheDOMElements();
    bindEventListeners();
    initProductCardSliders();
    initCookieBanner();
    initNewsletter();
    updateCartCount();
    renderCart();

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Run
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
