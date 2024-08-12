document.addEventListener('DOMContentLoaded', (event) => {

  const getElement = (context, selector) => {
    if (!context && !selector) {
      return null;
    }

    return context.querySelector(selector);
  };

  document.body.classList.add('loading');

  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500)

  const jsHeader = document.querySelector('.header');

  if(jsHeader !== null) {
    if($(window).scrollTop() >  5 ){
      jsHeader.classList.add('scroll')
    }
    if($(window).scrollTop() <  5){
      jsHeader.classList.remove('scroll')
    }

    $(window).on('scroll', function () {
      if($(window).scrollTop() >  5 ){
        jsHeader.classList.add('scroll')
      }
      if($(window).scrollTop() <  5){
        jsHeader.classList.remove('scroll')
      }
    })

  }


  // "modernizr" func"
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }

  // lazy-load
  const el = document.querySelectorAll('.lazy');
  window.observer = lozad(el);
  window.observer.observe();

  // swiper prog
  let swiperWhy = null;

  function initSwiperWhy() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && swiperWhy) {
      swiperWhy.destroy(true, true);
      swiperWhy = null;
    } else if (screenWidth < 768 && !swiperWhy) {
      swiperWhy = new Swiper('.js-why-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-prog-next',
          prevEl: '.js-prog-prev',
        },
      });
    }
  }

  window.addEventListener('load', initSwiperWhy);
  window.addEventListener('resize', initSwiperWhy);

  // swiper prog
  let swiperProg = null;

  function initSwiperProg() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && swiperProg) {
      swiperProg.destroy(true, true);
      swiperProg = null;
    } else if (screenWidth < 768 && !swiperProg) {
      swiperProg = new Swiper('.js-prog-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-prog-next',
          prevEl: '.js-prog-prev',
        }
      });
    }
  }

  window.addEventListener('load', initSwiperProg);
  window.addEventListener('resize', initSwiperProg);

  // swiper users
  let swiperKeys = null;

  function initSwiperKeys() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024 && swiperKeys) {
      swiperKeys.destroy(true, true);
      swiperKeys = null;
    } else if (screenWidth < 1024 && !swiperKeys) {
      swiperKeys = new Swiper('.js-keys-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }
      });
    }
  }

  window.addEventListener('load', initSwiperKeys);
  window.addEventListener('resize', initSwiperKeys);

  // swiper users

  const updatePosBtns = () => {
    const tradersBlock = document.querySelector('.traders-block');
    const activeSlide = tradersBlock.querySelector('.swiper-slide-active');
    const videoItem = activeSlide.querySelector('.video-item');

    const videoItemWidth = videoItem.offsetWidth;
    console.log('Ширина элемента video-item:', videoItemWidth);

    // Получаем позиции videoItem относительно края страницы
    const videoItemPosition = videoItem.getBoundingClientRect();
    const videoItemLeft = videoItemPosition.left;
    const videoItemRight = window.innerWidth - videoItemPosition.right;
    const prevButton = document.querySelector('.js-video-prev');
    const nextButton = document.querySelector('.js-video-next');

    prevButton.style.left = `${videoItemLeft - prevButton.offsetWidth / 2}px`;

    nextButton.style.right = `${videoItemRight - nextButton.offsetWidth / 2 }px`;
  }


  let swiperVideos = null;

  function initSwiperVideos() {
    swiperVideos = new Swiper('.js-videos-swiper', {
      slidesPerView: 3,
      spaceBetween: 1,
      centeredSlides: true,
      loop: true,
      lazy: {
        loadPrevNext: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: function() {
          if(window.innerWidth < 1201) {
            setTimeout(() => {
              updatePosBtns();
            }, 300)
          }
        }
      },
      navigation: {
        nextEl: '.js-video-next',
        prevEl: '.js-video-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }

  window.addEventListener('load', initSwiperVideos);
  window.addEventListener('resize', initSwiperVideos);
  window.addEventListener('resize', updatePosBtns)

  // swiper users
  let swiperAdvanture = null;

  function initSwiperAdvanture() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && swiperAdvanture) {
      swiperAdvanture.destroy(true, true);
      swiperAdvanture = null;
    } else if (screenWidth < 768 && !swiperAdvanture) {
      swiperAdvanture = new Swiper('.js-adv-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-adv-next',
          prevEl: '.js-adv-prev',
        }
      });
    }
  }

  window.addEventListener('load', initSwiperAdvanture);
  window.addEventListener('resize', initSwiperAdvanture);


  // swiper users
  let swiperUsers = null;

  function initSwiperUsers() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && swiperUsers) {
      swiperUsers.destroy(true, true);
      swiperUsers = null;
    } else if (screenWidth < 768 && !swiperUsers) {
      swiperUsers = new Swiper('.js-users-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-user-next',
          prevEl: '.js-user-prev',
        }
      });
    }
  }

  window.addEventListener('load', initSwiperUsers);
  window.addEventListener('resize', initSwiperUsers);

  // swiper logs
  let swiperLogs = null;

  function initSwiperLogs() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && swiperLogs) {
      swiperLogs.destroy(true, true);
      swiperLogs = null;
    } else if (screenWidth < 768 && !swiperLogs) {
      swiperLogs = new Swiper('.js-logs-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-log-next',
          prevEl: '.js-log-prev',
        }
      });
    }
  }

  window.addEventListener('load', initSwiperLogs);
  window.addEventListener('resize', initSwiperLogs);


  // swiper challenge
  let swiperChallenge = null;

  function initSwiperChallenge() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024 && swiperChallenge) {
      swiperChallenge.destroy(true, true);
      swiperChallenge = null;
    } else if (screenWidth < 1024 && !swiperChallenge) {
      swiperChallenge = new Swiper('.js-challenge-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-challenge-next',
          prevEl: '.js-challenge-prev',
        }
      });
    }
  }

  window.addEventListener('load', initSwiperChallenge);
  window.addEventListener('resize', initSwiperChallenge);

  // tabs
  document.addEventListener('click', (event) => {
    const tabsParent = event.target.closest('.js-tabs-wrapper');

    if (tabsParent) {
      const buttonTab = tabsParent.querySelectorAll('.js-tabs-button');
      const blockTab = tabsParent.querySelectorAll('.js-tabs-block');
      const clickedButton = event.target.closest('.js-tabs-button');

      if (clickedButton) {
        const id = clickedButton.getAttribute('data-id');

        buttonTab.forEach((button) => {
          button.classList.remove('opened');
        });

        blockTab.forEach((block) => {
          block.classList.remove('opened');
        });

        clickedButton.classList.add('opened');
        tabsParent.querySelectorAll('.js-tabs-button[data-id="' + id + '"]').forEach((all) => {
          all.classList.add('opened');
        })
        tabsParent.querySelectorAll('.js-tabs-block[data-id="' + id + '"]').forEach((blocks) => {
          blocks.classList.add('opened');
        })
      }
    }
  });


  // tabs
  document.addEventListener('click', (event) => {
    const tabsParent = event.target.closest('.adventure-block');

    if (tabsParent) {
      const buttonTab = tabsParent.querySelectorAll('.js-open-adv');
      const blockTab = tabsParent.querySelectorAll('.js-block-adv');
      const clickedButton = event.target.closest('.js-open-adv');

      if (clickedButton) {
        const id = clickedButton.getAttribute('data-id');

        buttonTab.forEach((button) => {
          button.classList.remove('is-active');
        });

        blockTab.forEach((block) => {
          block.classList.remove('is-active');
        });

        clickedButton.classList.add('is-active');
        tabsParent.querySelectorAll('.js-open-adv[data-id="' + id + '"]').forEach((all) => {
          all.classList.add('is-active');
        })
        tabsParent.querySelectorAll('.js-block-adv[data-id="' + id + '"]').forEach((blocks) => {
          blocks.classList.add('is-active');
        })
      }
    }
  });

  if(document.querySelectorAll('.js-select').length > 0) {
    $('.js-select').each((i, el) => {
      $(el).select2({
        allowClear: true,
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: $(el).data('search-min-length') === undefined ? '10' : $(el).data('search-min-length'),
        dropdownPosition: 'below',
        dropdownParent: $(el).parent(),
        maximumSelectionLength: $(el).data('max-length'),
        language: {
          noResults: () => {
            return 'noResults';
          },
          maximumSelected: () => {
            return + $(el).data('max-length') + ' ' +
              'maximumSelected 5 ';
          },
          searching: function (params) {
            query = params;
            return 'Searching…';
          }
        },
        templateResult: function (item) {
          if (item.loading) {
            return item.text;
          }
          var term = query.term || '';
          var $result = markMatch(item.text, term);
          return $result;
        },
        // ajax: {
        //   url: '/select2.json',
        //   dataType: 'json'
        // }
      });

      function markMatch(text, term) {
        var match = text.toUpperCase().indexOf(term.toUpperCase());
        var $result = $('<span></span>');
        if (match < 0) {
          return $result.text(text);
        }
        $result.text(text.substring(0, match));
        var $match = $('<span class="select2-rendered__match"></span>');
        $match.text(text.substring(match, match + term.length));
        $result.append($match);
        $result.append(text.substring(match + term.length));
        return $result;
      }

      // clone and append choises

      $(el).on('select2:select', function (e) {

      })

      $(el).on('select2:unselect', function (e) {

      })

      $(el).on('select2:open', function (e) {

      })

      $(el).on('select2:closing', function () {

      })
    })
  }

  // chart js

  const ctxWrap = document.getElementById('myChart');

  if(ctxWrap !== null) {
    const ctx = ctxWrap.getContext('2d');
    const chartCanvas = document.querySelector('.chart-canvas');
    const chartBtns = document.querySelectorAll('.js-chart-btn');
    const labels = JSON.parse(chartCanvas.getAttribute('data-labels'));
    let data = JSON.parse(chartCanvas.getAttribute('data-data'));

    const yGridGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    yGridGradient.addColorStop(0, 'rgba(255, 181, 193, 0.1)');
    yGridGradient.addColorStop(1, 'rgba(253, 251, 251, 0.1)');

    const xGridGradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    xGridGradient.addColorStop(0, 'rgba(255, 181, 193, 0.1)');
    xGridGradient.addColorStop(1, 'rgba(253, 251, 251, 0.1)');

    const dataConfig = {
      labels: labels,
      datasets: [{
        label: 'Points',
        data: data,
        borderWidth: 1,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0
      }],
    };

    const optionsConfig = {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: yGridGradient
          },
          ticks: {
            color: '#9A9494'
          }
        },
        x: {
          grid: {
            color: xGridGradient,
          },
          border: {
            dash: [8],
          },
          ticks: {
            color: '#9A9494'
          },
          // offset: 1 // Добавляем отступы по бокам
        }
      },
      plugins: {
        legend: {
          display: false // Скрываем легенду
        }
      }
    };


    let myChart = new Chart(ctx, {
      type: 'line',
      data: dataConfig,
      options: optionsConfig
    });


    chartBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        myChart.data.datasets[0].data = JSON.parse(btn.getAttribute('data-data'));
        myChart.update();

        let target = document.querySelector('.chart-wrap__right');
        let targetPosition = target.getBoundingClientRect().top + window.scrollY - 30;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });

      btn.addEventListener('mouseover', () => {
        const dataId = btn.getAttribute('data-id');
        document.querySelectorAll(`[data-id="${dataId}"]`).forEach(el => {
          el.classList.add('data-item-hover');
        });
      });

      btn.addEventListener('mouseout', () => {
        const dataId = btn.getAttribute('data-id');
        document.querySelectorAll(`[data-id="${dataId}"]`).forEach(el => {
          el.classList.remove('data-item-hover');
        });
      });
    })
  }

  const timerBlocks = document.querySelectorAll('.js-timer-block');

  timerBlocks.forEach(timerBlock => {
    const finishDate = new Date(timerBlock.getAttribute('data-date-finish')).getTime();

    const daysElem = timerBlock.querySelector('[data-days]');
    const hoursElem = timerBlock.querySelector('[data-hrs]');
    const minutesElem = timerBlock.querySelector('[data-mins]');

    function updateTimer() {
      const now = new Date().getTime();
      const distance = finishDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      daysElem.textContent = days;
      hoursElem.textContent = hours;
      minutesElem.textContent = minutes;

      if (distance < 0) {
        clearInterval(timerInterval);
        daysElem.textContent = '0';
        hoursElem.textContent = '0';
        minutesElem.textContent = '0';
      }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
  });

  const starsContainer = document.querySelector('.js-stars');
  const numStars = 80;
  if(starsContainer !== null) {
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starsContainer.appendChild(star);
    }

    function appearStars() {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star, index) => {
        setTimeout(() => {
          star.style.opacity = 1;
        }, index * 50);
      });
    }
    appearStars();
  }

  const paths = document.querySelectorAll('.js-top-elips path');
  paths.forEach((path, index) => {
    setTimeout(() => {
      path.classList.remove('hidden');
      path.classList.add('visible');
    }, index * 500);
  });

  const blocks = document.querySelectorAll('.js-inview');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
        entry.target.classList.add('visible');
      } else {

      }
    });
  }, { threshold: 0.5 });

  blocks.forEach(block => observer.observe(block));

  const openAdvs = document.querySelectorAll('.js-open-adv');

  if(openAdvs.length > 0) {
    openAdvs.forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.js-open-adv').forEach((all) => {
          all.classList.remove('is-active')
        })
        el.classList.add('is-active');
      })
    })
  }

  document.querySelectorAll('.js-tabs-button[data-position]').forEach(button => {
    button.addEventListener('click', function() {
      const wrap = button.closest('.adventure-block__tab-btns');
      const rocket = wrap.querySelector('.rocket-adv');

      document.querySelectorAll('.js-tabs-button').forEach(btn => btn.classList.remove('is-active'));

      this.classList.add('is-active');

      const buttonRect = this.getBoundingClientRect();

      const parentRect = wrap.getBoundingClientRect();

      const scrollLeft = wrap.scrollLeft;

      const left = buttonRect.left - parentRect.left + scrollLeft + (this.offsetWidth / 2);

      rocket.style.left = `${left - rocket.offsetWidth / 2}px`;
    });
  });

  $('.video-item__play').on('click', function() {
    // Получаем код видео из data-src атрибута
    var videoSrc = $(this).data('src');
    // Формируем полный URL для iframe
    var iframeSrc = 'https://www.youtube.com/embed/' + videoSrc + '?autoplay=1';

    // Открываем попап с нужным контентом
    $.magnificPopup.open({
      items: {
        src: '<div class="popup-video">'+
          '<iframe class="mfp-iframe" src="'+iframeSrc+'" frameborder="0" allowfullscreen></iframe>'+
          '</div>',
        type: 'inline'
      },
      closeBtnInside: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
  });

  const accs = document.querySelectorAll('.js-acc-wrap');

  function handleAccordion(parent) {
    const buttons = parent.querySelectorAll('.js-open-acc');
    const parentItems = parent.querySelectorAll('.js-acc');

    parentItems.forEach((parentItem) => {
      if (parentItem.classList.contains('active')) {
        parentItem.querySelector('.js-acc-block').style.maxHeight = parentItem.querySelector('.js-acc-block').scrollHeight + "px";
      }
    });

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const contents = button.closest('.js-acc-wrap').querySelectorAll('.js-acc-block');
        const contentsItem = button.closest('.js-acc').querySelector('.js-acc-block');
        const parentWrap = button.closest('.js-acc-wrap');
        if (button.closest('.js-acc').classList.contains('active')) {

          contentsItem.style.maxHeight = '0';
          button.closest('.js-acc').classList.remove('active');
        } else {
          contents.forEach((block) => {
            block.style.maxHeight = '0';
          });

          button.closest('.js-acc-wrap').querySelectorAll('.js-acc').forEach((parentItem) => {
            parentItem.classList.remove('active');
          });

          contentsItem.style.maxHeight = contentsItem.scrollHeight + "px";
          button.closest('.js-acc').classList.add('active');
        }

        // Reset parent wrap's max-height to initial
        parentWrap.style.maxHeight = 'initial';
      });

      // Check for nested accordions
      const nestedAccordions = button.closest('.js-acc').querySelectorAll('.js-acc-wrap');
      nestedAccordions.forEach((nestedAccordion) => {
        handleAccordion(nestedAccordion);
      });
    });
  }

  if (accs !== null) {
    accs.forEach((parent) => {
      handleAccordion(parent);
    });
  }

  document.querySelector('.js-open-menu').addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    document.querySelector('.js-menu-block').classList.add('block')
    setTimeout(() => {
      document.querySelector('.js-menu-block').classList.add('show')
    }, 300)
  })

  document.querySelector('.js-close-menu').addEventListener('click', () => {
    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = '0'
    document.querySelector('.js-menu-block').classList.remove('show')
    setTimeout(() => {
      document.querySelector('.js-menu-block').classList.remove('block')
    }, 300)
  })
})
