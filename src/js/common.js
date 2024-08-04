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

  // "modernizr" func"
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }

  // lazy-load
  const el = document.querySelectorAll('.lazy');
  window.observer = lozad(el);
  window.observer.observe();


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

  const ctx = document.getElementById('myChart').getContext('2d');
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
})
