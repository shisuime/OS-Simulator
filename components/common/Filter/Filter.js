export function filterData(searchText, array) {
  const searchTextLower = searchText.toLowerCase();
  const filteredData = array.filter((icon) => {
    // Check if icon.name is defined before calling toLowerCase()
    return icon.name && icon.name.toLowerCase().includes(searchTextLower);
  });
  return filteredData;
}
