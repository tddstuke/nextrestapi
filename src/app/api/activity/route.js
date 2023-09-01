import { Activity } from "../../../../db/models/index";
import { NextResponse } from "next/server";
// db.sequelize.sync();

export async function GET(req, res) {
  console.log("ok");
  try {
    const data = await Activity.findAll({});
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    NextResponse.json(error);
  }
}
