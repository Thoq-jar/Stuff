const timelineButton = document.getElementById('timelineButton');
    const infoButton = document.getElementById('infoButton');
    const infoModal = document.getElementById('infoModal');
    const timelineModal = document.getElementById('timelineModal');
    const closeButtonTimeline = document.getElementById('xtimeline');
    const closeButtonInfo = document.getElementById('xinfo');
    const infoModal2 = document.getElementById('infoModal2');
    const closeButtonInfo2 = document.getElementById('xinfo2');
    const infoButton2 = document.getElementById('infoButton2');
    
    timelineButton.addEventListener('click', function() {
      timelineModal.style.display = 'block';
    });
    
    infoButton.addEventListener('click', function() {
      infoModal.style.display = 'block';
    });

    infoButton2.addEventListener('click', function() {
      infoModal2.style.display = 'block';
    });
    
    closeButtonInfo.addEventListener('click', function() {
      infoModal.style.display = 'none';
    });
    
    closeButtonTimeline.addEventListener('click', function() {
      timelineModal.style.display = 'none';
    });

    closeButtonInfo2.addEventListener('click', function() {
      infoModal2.style.display = 'none';
    }); 
