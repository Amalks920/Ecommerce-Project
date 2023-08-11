import axios from "../../api/axios";
import { config } from "../../utils/axiosConfig";

const getCoupons = async () => {
  const response = await axios.get(`/coupon/`, config);

  return response.data;
};

const createCoupon = async (coupon) => {
  const response = await axios.post(`/coupon`, coupon, config);

  return response.data;
};
const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `/coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );

  return response.data;
};
const getCoupon = async (id) => {
  const response = await axios.get(`/coupon/${id}`, config);

  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(`/coupon/${id}`, config);

  return response.data;
};
const couponService = {
  getCoupons,
  createCoupon,
  deleteCoupon,
  getCoupon,
  updateCoupon,
};

export default couponService;