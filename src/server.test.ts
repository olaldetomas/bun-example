import request from "supertest";
import app from "./server";
import { beforeAll, describe, expect, it } from "bun:test";
import { Response } from "express";

describe("GET", () => {
  let response: Response;

  beforeAll(async () => {
    response = (await request(app).get("/")) as unknown as Response;
  });

  it("should return 200 OK", () => {
    expect(response.statusCode).toBe(200);
  });
});
