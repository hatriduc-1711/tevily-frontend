// auth
export const registerSelector = (state) => state.register.message;
export const loginSelector = (state) => state.login.message;

// admin
export const allAdminSelector = (state) => state.admin.listAdmin;
export const allUserSelector = (state) => state.admin.listUsers;
export const addAdminSelector = (state) => state.admin.addAdmin;
export const updateAdminSelector = (state) => state.admin.updateAdmin;

// tours
export const allTourSelector = (state) => state.tour.allTours;
export const allTourClientSelector = (state) => state.tour.toursClient;
export const allTourSearch = (state) => state.tour.tourSearch;
export const tourSelector = (state) => state.tour.tour;
export const addTourSelector = (state) => state.tour.allTours;

// news
export const allNewsSelector = (state) => state.news.listNews;
export const newsSelector = (state) => state.news.news;

// destination
export const allDestinationSelector = (state) => state.destination.listDestination;
export const destinationSelector = (state) => state.destination.destination;
