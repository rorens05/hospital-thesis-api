'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_treatments = sequelize.define('tb_treatments', {
    patient_id: DataTypes.INTEGER,
    ipt_no: DataTypes.STRING,
    date_opened: DataTypes.DATE,
    region_province: DataTypes.STRING,
    dots_facility: DataTypes.STRING,
    source: DataTypes.STRING,
    bcg_scar: DataTypes.STRING,
    tst_result: DataTypes.STRING,
    tst_date: DataTypes.DATE,
    cxr_result: DataTypes.STRING,
    cxr_date: DataTypes.DATE,
    other_exam_result: DataTypes.STRING,
    other_exam_date: DataTypes.DATE,
    xpert_result: DataTypes.STRING,
    xpert_date: DataTypes.DATE
  }, {});
  tb_treatments.associate = function(models) {
    // associations can be defined here
  };
  return tb_treatments;
};