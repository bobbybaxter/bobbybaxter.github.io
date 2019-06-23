import $ from 'jquery';
import interestsData from '../../helpers/data/interestsData';
import util from '../../helpers/util';

const printInterests = (interests) => {
  util.shuffle(interests);
  let domString = '';
  interests.forEach((interest) => {
    if (interest.interestUrl) {
      domString += `<a href="${interest.interestUrl}" tabindex="0" data-toggle="tooltip" title="${interest.description}"><span class="interests">${interest.title}</span></a>`;
    } else {
      domString += `<span class="interests" tabindex="0" data-toggle="tooltip" title="${interest.description}">${interest.title}</span>`;
    }
  });
  util.printToDom('interests', domString);
  $('[data-toggle="tooltip"]').tooltip();
};

const initInterests = () => {
  interestsData.getInterests()
    .then(interests => printInterests(interests))
    .catch(err => console.error('did not load interests', err));
};

export default { initInterests };
