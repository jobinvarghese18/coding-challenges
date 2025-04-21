const flattenObject = (data, parentKey, result = {}) => {
  for (const key in data) {
    const newKey = parentKey ? `${parentKey}_${key}` : key;
    if (typeof data[key] === "object") {
      flattenObject(data[key], newKey, result);
    } else {
      result[newKey] = data[key];
    }
  }
  return result;
};

const data = {
  user: {
    name: "John",
    tech: "Frontend",
    address: {
      home: {
        add_1: "home_dummy_add_1",
        add_2: "home_dummy_add_2",
      },
      office: {
        add_1: "off_dummy_add_1",
        add_2: "off_dummy_add_2",
      },
    },
  },
};

console.log(flattenObject(data), "result");
