const getCurrentPageEmployeeList = (list, currentPage, pageLimit) => {
  const startIndex = currentPage * pageLimit - pageLimit;
  const endIndex = currentPage * pageLimit;
  const currentPageList = list.slice(startIndex, endIndex);
  return currentPageList;
};

const pageRange = (pagePills) => {
    const pages = [];
    for (let i = 1; i <= pagePills; i++) {
      pages.push(i);
    }
    return pages;
  };

export { getCurrentPageEmployeeList, pageRange };
