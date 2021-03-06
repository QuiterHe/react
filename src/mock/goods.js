export const GoodsAPI = [
    {
        id: 1,
        name: "夏季新款男装长裤NIANJEEP商务休闲裤男士西裤直筒宽松纯棉男裤子",
        price: 76.00,
        img: "https://img.alicdn.com/imgextra/i2/1806772771/TB24fxrfmFjpuFjSspbXXXagVXa_!!1806772771.jpg_430x430q90.jpg"
    },
    {
        id: 2,
        name: "秋季新款NIANJEEP户外速干夹克男青年休闲大码外套薄款冲锋夹克男",
        price: 148.00,
        img: "https://img.alicdn.com/imgextra/i2/1806772771/TB24fxrfmFjpuFjSspbXXXagVXa_!!1806772771.jpg_430x430q90.jpg"
    },
    {
        id: 3,
        name: "NIANJEEP/吉普盾2018春季新款男士休闲外套大码宽松夹克男衣服",
        price:  138.00,
        img: "https://img.alicdn.com/imgextra/i2/1806772771/TB24fxrfmFjpuFjSspbXXXagVXa_!!1806772771.jpg_430x430q90.jpg"
    },
];
export const GoodsAPIS = [
    {
        id: 1,
        name: "夏季新款男装长裤NIANJEEP商务休闲裤男士...",
        price: 76.00,
        img: "https://img.alicdn.com/imgextra/i2/1806772771/TB24fxrfmFjpuFjSspbXXXagVXa_!!1806772771.jpg_430x430q90.jpg"
    },
    {
        id: 2,
        name: "秋季新款NIANJEEP户外速干夹克男青年休闲大...",
        price: 148.00,
        img: "https://img.alicdn.com/imgextra/i2/1806772771/TB24fxrfmFjpuFjSspbXXXagVXa_!!1806772771.jpg_430x430q90.jpg"
    },
    {
        id: 3,
        name: "NIANJEEP/吉普盾2018春季新款男士休闲外套...",
        price:  138.00,
        img: "https://img.alicdn.com/imgextra/i2/1806772771/TB24fxrfmFjpuFjSspbXXXagVXa_!!1806772771.jpg_430x430q90.jpg"
    },
];

export const findOne = (id) => {
    for (let i =0; i < GoodsAPI.length; i++) {
        if(id.toString() === GoodsAPI[i].id.toString()) {
            return GoodsAPI[i];
        }
    }
    return null;
};

export const findAll= () => {
    return GoodsAPI;
}