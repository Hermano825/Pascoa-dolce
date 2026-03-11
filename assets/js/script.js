/* ========================================
   PÁSCOA DOLCE DIVINO
   Script Principal
======================================== */

// --- 1. PRODUTOS ---
const products = [
    {
        id: 1,
        name: "Ovo Lata ao Leite",
        description: "Ovo ao leite com moedas de chocolate dentro. 150g",
        price: 89.90,
        category: "Ovos de Páscoa",
        image: "./assets/images/produtos/Ovos de páscoa/Ovo lata ao leite2.webp",
        images: [
            "./assets/images/produtos/Ovos de páscoa/Ovo lata ao leite2.webp",
            "./assets/images/produtos/Ovos de páscoa/Ovo lata ao leite1.webp",
            "./assets/images/produtos/Ovos de páscoa/Ovo lata ao leite3.webp"
        ],
        checkoutId: "ID_PASCOA_01"
    },
    {
        id: 2,
        name: "Ovo de Damasco",
        description: "Ovo de colher recheado com doce de leite, fruta seca damasco e chocolate branco. Finalizado com três damascos. 200g",
        price: 89.90,
        category: "Ovos de Páscoa",
        image: "./assets/images/produtos/Ovos de páscoa/Ovo de damasco.webp",
        images: [
            "./assets/images/produtos/Ovos de páscoa/Ovo de damasco.webp"
        ],
        checkoutId: "ID_PASCOA_02"
    },
    {
        id: 3,
        name: "Ovo Ninho com Nutella",
        description: "Ovo de colher recheado com nutella, brownie, ninho e crocante de chocolate. 160g",
        price: 69.90,
        category: "Ovos de Páscoa",
        image: "./assets/images/produtos/Ovos de páscoa/Ovo ninho com nutella.webp",
        images: [
            "./assets/images/produtos/Ovos de páscoa/Ovo ninho com nutella.webp"
        ],
        checkoutId: "ID_PASCOA_03"
    },
    {
        id: 4,
        name: "Ovo Trufa Flocada",
        description: "Ovo de colher recheado com chocolate, flocos de arroz, chocolate branco, gotas de oreo e finalizado com três trufas flocadas. 230g",
        price: 99.90,
        category: "Ovos de Páscoa",
        image: "./assets/images/produtos/Ovos de páscoa/Ovo trufa flocada.webp",
        images: [
            "./assets/images/produtos/Ovos de páscoa/Ovo trufa flocada.webp"
        ],
        checkoutId: "ID_PASCOA_04"
    },
    {
        id: 5,
        name: "Ovo Morango Divino",
        description: "Ovo de colher recheado com doce de leite, geleia de morango e chocolate. Finalizado com três morangos divinos. 270g",
        price: 89.90,
        category: "Ovos de Páscoa",
        image: "./assets/images/produtos/Ovos de páscoa/Ovo morango divino.webp",
        images: [
            "./assets/images/produtos/Ovos de páscoa/Ovo morango divino.webp"
        ],
        checkoutId: "ID_PASCOA_05"
    },
    {
        id: 6,
        name: "Bolo Jesus",
        description: "Duas camadas de massa amanteigada e uma camada de recheio. Finalizado com cobertura de merengue suíço.",
        price: 179.00,
        category: "Bolos",
        image: "./assets/images/produtos/Bolos/Bolo Jesus (1).webp",
        images: [
            "./assets/images/produtos/Bolos/Bolo Jesus (1).webp",
            "./assets/images/produtos/Bolos/Bolo Jesus (2).webp"
        ],
        variants: [
            { size: "10 fatias", price: 179.00 },
            { size: "20 fatias", price: 239.00 },
            { size: "30 fatias", price: 349.00 }
        ],
        fillings: ["Chocolate belga", "Doce de leite", "Doce de leite crocante"],
        checkoutId: "ID_BOLO_01"
    },
    {
        id: 7,
        name: "Bolo Cristo Ressucitou",
        description: "Duas camadas de massa amanteigada e uma camada de recheio. Finalizado com amêndoas laminadas. Bolo envolto em acetato.",
        price: 199.00,
        category: "Bolos",
        image: "./assets/images/produtos/Bolos/Bolo Cristo Ressuscitou.webp",
        images: ["./assets/images/produtos/Bolos/Bolo Cristo Ressuscitou.webp"],
        variants: [
            { size: "10 fatias", price: 199.00 },
            { size: "20 fatias", price: 259.00 },
            { size: "30 fatias", price: 369.00 }
        ],
        fillings: ["Chocolate belga", "Doce de leite", "Doce de leite crocante"],
        checkoutId: "ID_BOLO_02"
    },
    {
        id: 8,
        name: "Bolo Coelho Pascoal",
        description: "Duas camadas de massa amanteigada e uma camada de recheio. Finalizado com cobertura de merengue suíço. Bolo envolto em acetato.",
        price: 179.00,
        category: "Bolos",
        image: "./assets/images/produtos/Bolos/Bolo Coelho Pascoal.webp",
        images: ["./assets/images/produtos/Bolos/Bolo Coelho Pascoal.webp"],
        variants: [
            { size: "10 fatias", price: 179.00 },
            { size: "20 fatias", price: 239.00 },
            { size: "30 fatias", price: 349.00 }
        ],
        fillings: ["Chocolate belga", "Doce de leite", "Doce de leite crocante"],
        checkoutId: "ID_BOLO_03"
    },
    {
        id: 9,
        name: "Bolo Divino Páscoa",
        description: "Massa de chocolate com cobertura de chocolate belga. Bolo envolto em acetato. Serve de 8 a 10 fatias.",
        price: 79.90,
        category: "Bolos",
        image: "./assets/images/produtos/Bolos/Bolo Divino Páscoa (1).webp",
        images: [
            "./assets/images/produtos/Bolos/Bolo Divino Páscoa (1).webp",
            "./assets/images/produtos/Bolos/Bolo Divino Páscoa (2).webp"
        ],
        checkoutId: "ID_BOLO_04"
    },
    {
        id: 10,
        name: "Sobremesa Páscoa",
        description: "Sobremesa de 900g recheada com chocolate, brownie, marshmallow, massa amanteigada e creme de pistache.",
        price: 179.90,
        category: "Bolos",
        image: "./assets/images/produtos/Bolos/Sobremesa páscoa 900g (1).webp",
        images: [
            "./assets/images/produtos/Bolos/Sobremesa páscoa 900g (1).webp",
            "./assets/images/produtos/Bolos/Sobremesa páscoa 900g (2).webp",
            "./assets/images/produtos/Bolos/Sobremesa páscoa 900g (3).webp",
            "./assets/images/produtos/Bolos/Sobremesa páscoa 900g (4).webp"
        ],
        checkoutId: "ID_BOLO_05"
    },
    {
        id: 11,
        name: "Cesta Páscoa",
        description: "Cesta com suspiro, biscoito Petit Four, Marshmallow, castanha caramelizada, amêndoa drageada, banana drageada de chocolate, pipoca gourmet de ninho e pipoca gourmet ninho com Nutella.",
        price: 289.90,
        category: "Kits",
        image: "./assets/images/produtos/kits/Cesta de Páscoa.webp",
        images: ["./assets/images/produtos/kits/Cesta de Páscoa.webp"],
        checkoutId: "ID_KIT_01"
    },
    {
        id: 12,
        name: "Waffles Divinos",
        description: "Biscoito waffle com cobertura de chocolate.",
        price: 39.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_01"
    },
    {
        id: 13,
        name: "Coelho de Chocolate",
        description: "Coelho de 70g recheado com brownie, nutella e chocolate ao leite.",
        price: 89.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_02"
    },
    {
        id: 14,
        name: "Morangos Páscoa",
        description: "Morangos especiais de Páscoa, disponíveis em caixas de 4, 6 ou 10 unidades.",
        price: 75.00,
        category: "Lembrancinhas",
        image: "",
        images: [],
        variants: [
            { size: "Caixa com 4 unidades", price: 75.00 },
            { size: "Caixa com 6 unidades", price: 110.00 },
            { size: "Caixa com 10 unidades", price: 185.00 }
        ],
        checkoutId: "ID_LEMB_03"
    },
    {
        id: 15,
        name: "Pirulito de Páscoa",
        description: "Pirulito artesanal de Páscoa.",
        price: 25.00,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_04"
    },
    {
        id: 16,
        name: "Cupcake de Páscoa",
        description: "Cupcake de Páscoa com recheio de doce de leite.",
        price: 24.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_05"
    },
    {
        id: 17,
        name: "Castanha Drageada",
        description: "Castanha drageada com chocolate 70%.",
        price: 44.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_06"
    },
    {
        id: 18,
        name: "Castanha Caramelizada",
        description: "Castanha caramelizada artesanal.",
        price: 29.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_07"
    },
    {
        id: 19,
        name: "Amêndoa Drageada",
        description: "Amêndoa drageada com chocolate 70%.",
        price: 44.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_08"
    },
    {
        id: 20,
        name: "Banana Drageada",
        description: "Banana drageada com chocolate 70%.",
        price: 39.90,
        category: "Lembrancinhas",
        image: "",
        images: [],
        checkoutId: "ID_LEMB_09"
    }
    // Novos produtos serão adicionados aqui
];

let cart = [];
let cartOrder = [];

function loadCart() {
    try { cart = JSON.parse(localStorage.getItem('dolce_pascoa_cart')) || []; }
    catch (_) { cart = []; }
    try { cartOrder = JSON.parse(localStorage.getItem('dolce_pascoa_cart_order')) || []; }
    catch (_) { cartOrder = []; }
}

function saveCart() {
    try { localStorage.setItem('dolce_pascoa_cart', JSON.stringify(cart)); } catch (_) {}
}

function saveCartOrder() {
    try { localStorage.setItem('dolce_pascoa_cart_order', JSON.stringify(cartOrder)); } catch (_) {}
}

// --- 2. INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    updateCartUI();
    startTimer();
    lucide.createIcons();
    initLazyImages();
    injectJsonLd();

    // Abas do carrinho
    window.switchCartTab = function (tab) {
        const secCart = document.getElementById('cart-section-carrinho');
        const secDados = document.getElementById('cart-section-dados');
        const tabCarrinho = document.getElementById('tab-carrinho');
        const tabDados = document.getElementById('tab-dados');
        if (!secCart || !secDados || !tabCarrinho || !tabDados) return;
        if (tab === 'dados') {
            secCart.classList.add('hidden');
            secDados.classList.remove('hidden');
            tabCarrinho.classList.remove('bg-white/15'); tabCarrinho.classList.add('bg-white/5');
            tabDados.classList.add('bg-white/15');
        } else {
            secDados.classList.add('hidden');
            secCart.classList.remove('hidden');
            tabDados.classList.remove('bg-white/15'); tabDados.classList.add('bg-white/5');
            tabCarrinho.classList.add('bg-white/15');
        }
        lucide.createIcons();
    };
    if (document.getElementById('tab-carrinho')) switchCartTab('carrinho');

    if (window.location.hash === '#produtos') {
        const sec = document.getElementById('produtos');
        if (sec) setTimeout(() => sec.scrollIntoView({ behavior: 'smooth' }), 50);
    }

    if (window.location.hash === '#cart') {
        setTimeout(() => toggleCartModal(), 50);
    }

    // Prefill dados salvos
    try {
        const saved = JSON.parse(localStorage.getItem('dolce_client_info'));
        if (saved) {
            const fill = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
            fill('client-name', saved.nome);
            fill('client-cpf', saved.cpf);
            fill('client-phone', saved.telefone);
            fill('client-cep', saved.cep);
            fill('client-city', saved.cidade);
            fill('client-bairro', saved.bairro);
            fill('client-rua', saved.rua);
            fill('client-numero', saved.numero);
            fill('client-complemento', saved.complemento);
            fill('client-notes', saved.observacoes);
        }
    } catch (_) {}

    // Máscara CPF
    const cpfInput = document.getElementById('client-cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', () => {
            const v = cpfInput.value.replace(/\D/g, '').slice(0, 11);
            let out = v;
            if (v.length > 9) out = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            else if (v.length > 6) out = v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
            else if (v.length > 3) out = v.replace(/(\d{3})(\d{0,3})/, '$1.$2');
            cpfInput.value = out;
        });
    }

    // Máscara Telefone
    const phoneInput = document.getElementById('client-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            const d = phoneInput.value.replace(/\D/g, '').slice(0, 11);
            let out = d;
            if (d.length >= 11) out = d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            else if (d.length >= 10) out = d.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            else if (d.length >= 6) out = d.replace(/(\d{2})(\d{0,4})/, '($1) $2');
            else if (d.length >= 2) out = d.replace(/(\d{2})(\d{0,3})/, '($1) $2');
            phoneInput.value = out;
        });
    }

    // Máscara CEP + ViaCEP
    const cepInput = document.getElementById('client-cep');
    const cityInput = document.getElementById('client-city');
    if (cepInput) {
        cepInput.addEventListener('input', () => {
            const v = cepInput.value.replace(/\D/g, '').slice(0, 8);
            cepInput.value = v.length > 5 ? v.replace(/(\d{5})(\d{0,3})/, '$1-$2') : v;
        });
        cepInput.addEventListener('blur', async () => {
            const digits = cepInput.value.replace(/\D/g, '');
            if (digits.length !== 8) return;
            try {
                const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
                const data = await res.json();
                if (!data.erro) {
                    if (cityInput) cityInput.value = `${data.localidade}/${data.uf}`;
                    const bairroEl = document.getElementById('client-bairro');
                    if (bairroEl && data.bairro) bairroEl.value = data.bairro;
                    const ruaEl = document.getElementById('client-rua');
                    if (ruaEl && data.logradouro && !ruaEl.value.trim()) ruaEl.value = data.logradouro;
                }
            } catch (_) {}
        });
    }
});

// --- 3. RENDERIZAÇÃO DOS PRODUTOS ---
let filteredProducts = [...products];
let activeCategory = 'all';

function encodeImgPath(path) {
    return path.split('/').map(seg => encodeURIComponent(seg).replace(/'/g, '%27')).join('/');
}

function renderProducts(productsToRender = filteredProducts) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const visible = productsToRender.filter(p => !p.hidden && p.image && p.image.trim() !== '');

    if (visible.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i data-lucide="search-x" class="mx-auto text-gray-400 mb-4" width="64" height="64"></i>
                <h3 class="text-2xl font-bold text-gray-700 mb-2">Nenhum produto encontrado</h3>
                <p class="text-gray-500 mb-6">Tente buscar por outro termo</p>
                <button onclick="clearSearch()" class="bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Ver Todos os Produtos
                </button>
            </div>`;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = visible.map(product => `
        <div class="product-card bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-stone-100 cursor-pointer group" onclick="viewProduct(${product.id})">
            <div class="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl shrink-0 bg-stone-100">
                <div class="absolute inset-0 animate-pulse bg-stone-200 skeleton" aria-hidden="true"></div>
                <img id="img-${product.id}" data-src="${encodeImgPath(product.image)}" alt="${product.name}"
                    class="w-full h-full object-cover opacity-0 transition-opacity duration-500 lazy-img"
                    loading="lazy"
                    onerror="handleImgError(this)">
                <span class="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rose-900 rounded-full shadow-sm">
                    ${product.category}
                </span>
                ${product.images && product.images.length > 1 ? `
                    <div class="absolute top-4 right-4 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i data-lucide="images" width="14"></i> ${product.images.length}
                    </div>` : ''}
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <span class="text-white font-bold text-sm bg-rose-700 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                        Ver Detalhes
                    </span>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-bold text-gray-800 leading-tight">${product.name}</h4>
                    <span class="text-rose-900 font-bold bg-rose-50 px-2 py-1 rounded whitespace-nowrap ml-2">${product.variants?.length ? `A partir de R$ ${Math.min(...product.variants.map(v => v.price)).toFixed(2)}` : `R$ ${product.price.toFixed(2)}`}</span>
                </div>
                <p class="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">${product.description}</p>
                ${product.variants?.length
                    ? `<button onclick="event.stopPropagation(); viewProduct(${product.id})"
                    class="add-to-cart-btn w-full bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-800 hover:to-rose-900 text-white font-medium py-3 min-h-[44px] rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-auto active:scale-95 shadow-md hover:shadow-lg"
                    aria-label="Escolher opções de ${product.name}">
                    <i data-lucide="layers" width="18"></i>
                    Escolher tamanho
                </button>`
                    : `<button onclick="event.stopPropagation(); addToCart(${product.id})"
                    class="add-to-cart-btn w-full bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-800 hover:to-rose-900 text-white font-medium py-3 min-h-[44px] rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-auto active:scale-95 shadow-md hover:shadow-lg"
                    aria-label="Adicionar ${product.name} ao carrinho">
                    <i data-lucide="plus" width="18"></i>
                    Adicionar
                </button>`}
            </div>
        </div>
    `).join('');

    lucide.createIcons();
    initLazyImages();
}

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function handleImgError(img) {
    const wrapper = img.parentElement;
    if (!wrapper) return;
    wrapper.querySelector('.skeleton')?.remove();
    img.style.display = 'none';
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'center';
    wrapper.insertAdjacentHTML('beforeend', '<span style="font-size:3rem;opacity:0.25">🎂</span>');
}

function generateSlug(name) {
    return name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '').trim()
        .replace(/\s+/g, '-').replace(/-+/g, '-');
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        window.location.href = `produto.html?nome=${generateSlug(product.name)}&id=${productId}`;
    }
}

// --- 4. BUSCA ---
function executeSearch() {
    const desktopInput = document.getElementById('search-input-desktop');
    const mobileInput = document.getElementById('search-input-mobile');
    const desktopVisible = desktopInput && desktopInput.offsetParent !== null;
    const term = desktopVisible ? (desktopInput?.value || '') : (mobileInput?.value || '');
    searchProducts(term);
    const menu = document.getElementById('mobile-menu');
    if (menu && !menu.classList.contains('hidden')) toggleMenu();
}

function searchProducts(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    const searchInfo = document.getElementById('search-info');
    const searchText = document.getElementById('search-text');

    if (term === '') {
        filteredProducts = applyCategoryFilter(products, activeCategory);
        if (searchInfo) searchInfo.classList.add('hidden');
    } else {
        filteredProducts = applyCategoryFilter(products, activeCategory).filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );
        if (searchInfo) searchInfo.classList.remove('hidden');
        if (searchText) searchText.textContent = `${filteredProducts.length} resultado(s) para "${searchTerm}"`;
    }

    renderProducts(filteredProducts);
    lucide.createIcons();
    if (term !== '') {
        const sec = document.getElementById('produtos');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }
}

function clearSearch() {
    const d = document.getElementById('search-input-desktop');
    const m = document.getElementById('search-input-mobile');
    if (d) d.value = '';
    if (m) m.value = '';
    filteredProducts = applyCategoryFilter(products, activeCategory);
    const info = document.getElementById('search-info');
    if (info) info.classList.add('hidden');
    renderProducts(filteredProducts);
    lucide.createIcons();
}

function applyCategoryFilter(list, category) {
    if (!category || category === 'all') return [...list];
    return list.filter(p => p.category === category);
}

function filterByCategory(category) {
    activeCategory = category;
    const d = document.getElementById('search-input-desktop');
    const m = document.getElementById('search-input-mobile');
    const term = (d?.value || m?.value || '').trim();
    if (term) {
        searchProducts(term);
    } else {
        filteredProducts = applyCategoryFilter(products, activeCategory);
        renderProducts(filteredProducts);
        lucide.createIcons();
        const sec = document.getElementById('produtos');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- 5. CARRINHO ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    if (product.variants?.length) { viewProduct(id); return; }
    cart.push(product);
    saveCart();

    const groupKey = `${id}`;
    if (!cartOrder.includes(groupKey)) { cartOrder.push(groupKey); saveCartOrder(); }

    if (typeof fbq !== 'undefined') {
        fbq('track', 'AddToCart', { content_name: product.name, content_ids: [product.id], content_type: 'product', value: product.price, currency: 'BRL' });
    }

    const btn = event?.target?.closest('.add-to-cart-btn');
    if (btn) { btn.classList.add('btn-added'); setTimeout(() => btn.classList.remove('btn-added'), 600); }

    updateCartUI();

    const modal = document.getElementById('cart-modal');
    if (modal?.classList.contains('hidden')) toggleCartModal();
}

function increaseItemByKey(groupKey) {
    const item = cart.find(i => (i.variantLabel ? `${i.id}-${i.variantLabel}` : `${i.id}`) === groupKey);
    if (!item) return;
    cart.push({ ...item });
    if (!cartOrder.includes(groupKey)) { cartOrder.push(groupKey); saveCartOrder(); }
    saveCart(); updateCartUI();
}

function decreaseItemByKey(groupKey) {
    const idx = cart.findIndex(i => (i.variantLabel ? `${i.id}-${i.variantLabel}` : `${i.id}`) === groupKey);
    if (idx !== -1) { cart.splice(idx, 1); saveCart(); updateCartUI(); }
}

function removeGroupByKey(groupKey) {
    cart = cart.filter(i => (i.variantLabel ? `${i.id}-${i.variantLabel}` : `${i.id}`) !== groupKey);
    cartOrder = cartOrder.filter(k => k !== groupKey);
    saveCartOrder(); saveCart(); updateCartUI();
}

// Aliases de compatibilidade
function increaseItemById(id) { increaseItemByKey(`${id}`); }
function decreaseItemById(id) { decreaseItemByKey(`${id}`); }
function removeGroupById(id) { removeGroupByKey(`${id}`); }

if (typeof window !== 'undefined') {
    window.increaseItemByKey = increaseItemByKey;
    window.decreaseItemByKey = decreaseItemByKey;
    window.removeGroupByKey = removeGroupByKey;
    window.increaseItemById = increaseItemById;
    window.decreaseItemById = decreaseItemById;
    window.removeGroupById = removeGroupById;
}

function updateCartUI() {
    const count = cart.length;
    [document.getElementById('cart-badge'), document.getElementById('mobile-cart-badge')]
        .filter(Boolean).forEach(b => { b.innerText = count; b.style.opacity = count > 0 ? '1' : '0'; });

    const mobileFloat = document.getElementById('mobile-float-btn');
    if (mobileFloat) mobileFloat.classList.toggle('hidden', count === 0);

    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!itemsContainer || !totalEl) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<div class="text-center text-gray-500 mt-10 flex flex-col items-center"><i data-lucide="shopping-bag" size="48" class="text-gray-300 mb-4"></i>Seu carrinho está vazio 🐣</div>';
        totalEl.innerText = 'R$ 0,00';
        const td = document.getElementById('cart-total-dados');
        if (td) td.innerText = 'R$ 0,00';
        lucide.createIcons();
        return;
    }

    // Agrupamento por chave (id + variante)
    const groups = new Map();
    cart.forEach(item => {
        const key = item.variantLabel ? `${item.id}-${item.variantLabel}` : `${item.id}`;
        const g = groups.get(key);
        if (g) g.qty += 1;
        else groups.set(key, { item, qty: 1 });
    });

    const orderedKeys = [];
    cartOrder.forEach(k => { if (groups.has(k)) orderedKeys.push(k); });
    groups.forEach((_, k) => { if (!cartOrder.includes(k)) orderedKeys.push(k); });

    let total = 0;
    const rows = [];
    orderedKeys.forEach(key => {
        const { item, qty } = groups.get(key);
        const lineTotal = item.price * qty;
        total += lineTotal;
        const variant = item.variantLabel ? `<span class="text-xs text-rose-700 font-semibold">(${item.variantLabel})</span>` : '';
        rows.push(`
            <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100" data-group-key="${key}">
                <div class="flex items-center gap-3 flex-1">
                    <img src="${encodeImgPath(item.image || '')}" class="w-12 h-12 rounded object-cover">
                    <div class="flex-1">
                        <h4 class="text-sm font-bold text-gray-800">${item.name} ${variant}</h4>
                        <span class="text-xs text-gray-500">R$ ${item.price.toFixed(2)} cada</span>
                        <div class="text-xs font-semibold text-rose-800 mt-1">Subtotal: R$ ${lineTotal.toFixed(2)}</div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="decreaseItemByKey('${key}')" class="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"><i data-lucide="minus" size="16"></i></button>
                    <span class="text-sm font-bold text-gray-700">${qty}</span>
                    <button onclick="increaseItemByKey('${key}')" class="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"><i data-lucide="plus" size="16"></i></button>
                    <button onclick="removeGroupByKey('${key}')" class="text-red-500 hover:text-red-700 p-2"><i data-lucide="trash-2" size="18"></i></button>
                </div>
            </div>`);
    });

    itemsContainer.innerHTML = rows.join('');
    totalEl.innerText = `R$ ${total.toFixed(2)}`;
    const td = document.getElementById('cart-total-dados');
    if (td) td.innerText = `R$ ${total.toFixed(2)}`;
    lucide.createIcons();
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    if (!modal || !panel) return;
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => panel.classList.remove('translate-x-full'), 10);
    } else {
        panel.classList.add('translate-x-full');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

// --- 6. CHECKOUT ---
function finalizarCompra() {
    if (cart.length === 0) { alert('Adicione itens primeiro!'); return; }

    const get = id => document.getElementById(id);
    const nameInput = get('client-name');
    const cpfInput = get('client-cpf');
    const phoneInput = get('client-phone');
    const cepInput = get('client-cep');
    const cityInput = get('client-city');
    const bairroInput = get('client-bairro');
    const ruaInput = get('client-rua');
    const numeroInput = get('client-numero');
    const complInput = get('client-complemento');
    const notesInput = get('client-notes');
    const errorEl = get('checkout-error');

    const cleanCPF = v => v.replace(/\D/g, '').slice(0, 11);
    const formatCPF = v => {
        const c = cleanCPF(v);
        return c.length === 11 ? c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : v;
    };
    const isValidCPF = v => {
        const c = cleanCPF(v);
        if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return false;
        let s = 0;
        for (let i = 0; i < 9; i++) s += +c[i] * (10 - i);
        let d1 = (s * 10) % 11; if (d1 === 10) d1 = 0;
        if (d1 !== +c[9]) return false;
        s = 0;
        for (let i = 0; i < 10; i++) s += +c[i] * (11 - i);
        let d2 = (s * 10) % 11; if (d2 === 10) d2 = 0;
        return d2 === +c[10];
    };
    const cleanPhone = v => v.replace(/\D/g, '').slice(0, 11);
    const formatPhone = v => {
        const d = cleanPhone(v);
        if (d.length === 11) return d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        if (d.length === 10) return d.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        return v;
    };

    const nome = nameInput?.value.trim() || '';
    const cpfRaw = cpfInput?.value.trim() || '';
    const phoneRaw = phoneInput?.value.trim() || '';
    const cep = cepInput?.value.replace(/\D/g, '') || '';
    const cidade = cityInput?.value.trim() || '';
    const bairro = bairroInput?.value.trim() || '';
    const rua = ruaInput?.value.trim() || '';
    const numero = numeroInput?.value.trim() || '';
    const complemento = complInput?.value.trim() || '';
    const observacoes = notesInput?.value.trim() || '';

    if (cpfInput) cpfInput.value = formatCPF(cpfRaw);
    if (phoneInput) phoneInput.value = formatPhone(phoneRaw);

    const phoneDigits = cleanPhone(phoneRaw);
    const cpfDigits = cleanCPF(cpfRaw);

    // Reset errors
    [nameInput, cpfInput, phoneInput, cepInput, cityInput, bairroInput, ruaInput, numeroInput]
        .filter(Boolean).forEach(el => el.classList.remove('border-red-500'));
    if (errorEl) { errorEl.classList.add('hidden'); errorEl.textContent = ''; }

    const invalid = [];
    if (!nome) invalid.push(nameInput);
    if (!isValidCPF(cpfDigits)) invalid.push(cpfInput);
    if (!(phoneDigits.length === 10 || phoneDigits.length === 11)) invalid.push(phoneInput);
    if (cep.length !== 8) invalid.push(cepInput);
    if (!cidade) invalid.push(cityInput);
    if (!bairro) invalid.push(bairroInput);
    if (!rua) invalid.push(ruaInput);
    if (!numero) invalid.push(numeroInput);

    if (invalid.length) {
        invalid.filter(Boolean).forEach(el => el.classList.add('border-red-500'));
        if (errorEl) { errorEl.textContent = 'Preencha Nome, CPF, Telefone e Endereço completo.'; errorEl.classList.remove('hidden'); }
        return;
    }

    // Persiste dados do cliente
    try {
        localStorage.setItem('dolce_client_info', JSON.stringify({
            nome, cpf: formatCPF(cpfDigits), telefone: formatPhone(phoneDigits),
            cep: cepInput?.value, cidade, bairro, rua, numero, complemento, observacoes
        }));
    } catch (_) {}

    const total = cart.reduce((a, i) => a + i.price, 0);
    const couponDiscount = (window.appliedCoupon && window.appliedCoupon.pct) ? total * window.appliedCoupon.pct : 0;
    const finalTotal = total - couponDiscount;

    // Meta Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', { content_ids: cart.map(i => i.id), value: finalTotal, currency: 'BRL', num_items: cart.length });
    }

    // Mensagem WhatsApp
    let msg = 'Olá! Quero finalizar meu pedido de Páscoa:\n\n';
    msg += `Nome: ${nome}\n`;
    msg += `CPF: ${formatCPF(cpfDigits)}\n`;
    msg += `Telefone: ${formatPhone(phoneDigits)}\n`;
    msg += `CEP: ${cepInput?.value || ''}\n`;
    msg += `Cidade: ${cidade}\n`;
    msg += `Bairro: ${bairro}\n`;
    msg += `Rua: ${rua}\n`;
    msg += `Número: ${numero}\n`;
    if (complemento) msg += `Complemento: ${complemento}\n`;
    if (observacoes) msg += `Observações: ${observacoes}\n`;
    msg += '\n';
    cart.forEach(item => {
        msg += `- ${item.name}${item.variantLabel ? ` (${item.variantLabel})` : ''}: R$ ${item.price.toFixed(2)}\n`;
    });
    if (couponDiscount > 0) {
        msg += `\nSubtotal: R$ ${total.toFixed(2)}\n`;
        msg += `Cupom (${window.appliedCoupon.code}): - R$ ${couponDiscount.toFixed(2)}\n`;
    }
    msg += `\n*Total: R$ ${finalTotal.toFixed(2)}*`;

    // Envia lead ao backend
    fetch('/api/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cliente: { nome, cpf: formatCPF(cpfDigits), telefone: formatPhone(phoneDigits), cep: cepInput?.value, cidade, bairro, rua, numero, complemento, observacoes }, cart, total: finalTotal })
    }).catch(() => {});

    if (typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', { content_ids: cart.map(i => i.id), value: finalTotal, currency: 'BRL', num_items: cart.length });
    }

    window.open(`https://wa.me/5585988884717?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- 7. TIMER ---
function startTimer() {
    // Prazo: sábado antes da Páscoa 2026 (5 de abril) — retirada final em 4/04
    const targetDate = new Date('2026-04-04T23:59:59');
    const countdown = document.getElementById('countdown');
    if (!countdown) return;

    function tick() {
        const diff = targetDate - new Date();
        if (diff <= 0) { countdown.innerHTML = '<span class="bg-rose-500 text-white px-3 py-1 rounded text-sm font-bold">Encerrado!</span>'; return; }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff / 3600000) % 24);
        const m = Math.floor((diff / 60000) % 60);
        countdown.innerHTML = `
            <div class="bg-rose-500 text-white px-2 py-1 rounded text-base font-bold">${d}d</div>
            <div class="bg-rose-500 text-white px-2 py-1 rounded text-base font-bold">${h}h</div>
            <div class="bg-rose-500 text-white px-2 py-1 rounded text-base font-bold">${m}m</div>`;
    }
    tick();
    setInterval(tick, 60000);
}

// --- 8. LAZY LOADING ---
function initLazyImages() {
    const images = document.querySelectorAll('img.lazy-img[data-src]');
    if (!images.length) return;
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.addEventListener('load', () => {
                img.style.opacity = '1';
                img.parentElement?.querySelector('.animate-pulse')?.remove();
            }, { once: true });
            obs.unobserve(img);
        });
    }, { rootMargin: '200px 0px', threshold: 0.01 });
    images.forEach(img => io.observe(img));
}

// --- 9. JSON-LD DINÂMICO ---
function injectJsonLd() {
    try {
        const items = products.filter(p => !p.hidden).map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
                '@type': 'Product',
                name: p.name,
                description: p.description,
                category: p.category,
                image: (p.images || [p.image]).map(i => i.replace(/ /g, '%20')),
                offers: { '@type': 'Offer', priceCurrency: 'BRL', price: p.price.toFixed(2), availability: 'https://schema.org/InStock' }
            }
        }));
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: items });
        document.head.appendChild(script);
    } catch (_) {}
}
