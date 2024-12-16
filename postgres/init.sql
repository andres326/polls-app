-- Table: public.polls

-- DROP TABLE IF EXISTS public.polls;

CREATE TABLE IF NOT EXISTS public.polls
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    title text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    CONSTRAINT polls_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.polls
    OWNER to postgres;

-- Table: public.poll_options

-- DROP TABLE IF EXISTS public.poll_options;

CREATE TABLE IF NOT EXISTS public.poll_options
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text COLLATE pg_catalog."default" NOT NULL,
    votes integer NOT NULL DEFAULT 0,
    poll_id uuid NOT NULL,
    CONSTRAINT poll_options_pkey PRIMARY KEY (id),
    CONSTRAINT "FK_POLL_ID" FOREIGN KEY (poll_id)
        REFERENCES public.polls (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.poll_options
    OWNER to postgres;

INSERT INTO public.polls(
	id, title, description)
	VALUES ('81c3c5a0-6090-4f33-a715-d33f407c34de', 'New poll', 'This is a new poll');

INSERT INTO public.poll_options(
	id, name, votes, poll_id)
	VALUES ('e1e0e7b0-f8a9-4f3d-a1a2-b5a0c2f4e2d0', 'Option 1', 0, '81c3c5a0-6090-4f33-a715-d33f407c34de');

INSERT INTO public.poll_options(
	id, name, votes, poll_id)
	VALUES ('e1e0e7b0-f8a9-4f3d-a1a2-b5a0c2f4e2d1', 'Option 2', 0, '81c3c5a0-6090-4f33-a715-d33f407c34de');

INSERT INTO public.poll_options(
	id, name, votes, poll_id)
	VALUES ('f1e0e7b0-f8a9-4f3d-a1a2-b5a0c2f4e2d2', 'Option 3', 0, '81c3c5a0-6090-4f33-a715-d33f407c34de');

INSERT INTO public.polls(
	id, title, description)
	VALUES ('9248d8a8-f900-43c8-bacd-9f3e5ae9dac9', 'Best superheroes', 'Vote for the best superheroes');

INSERT INTO public.poll_options(
	id, name, votes, poll_id)
	VALUES ('e1e0e7b0-f8a9-4f3d-a1a2-b5a0c2f4e2d3', 'Batman', 0, '9248d8a8-f900-43c8-bacd-9f3e5ae9dac9');

INSERT INTO public.poll_options(
	id, name, votes, poll_id)
	VALUES ('e1e0e7b0-f8a9-4f3d-a1a2-b5a0c2f4e2d4', 'Superman', 0, '9248d8a8-f900-43c8-bacd-9f3e5ae9dac9');

INSERT INTO public.poll_options(
	id, name, votes, poll_id) 
	VALUES ('e1e0e7b0-f8a9-4f3d-a1a2-b5a0c2f4e2d5', 'Spiderman', 0, '9248d8a8-f900-43c8-bacd-9f3e5ae9dac9'); 